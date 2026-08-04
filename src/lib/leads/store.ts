import { appendFile, chmod, mkdir } from "node:fs/promises";
import { dirname, isAbsolute, resolve } from "node:path";

import { MongoClient, type Collection, type Db } from "mongodb";

import { serverEnv } from "@/lib/env";
import type { StoredLead } from "./schema";

/**
 * MongoDB is the system of record. In dev this is a local mongod; in production
 * MONGODB_URI points at Atlas.
 *
 * Next.js hot-reloads modules, and serverless platforms reuse warm instances, so
 * the client promise is cached on globalThis — otherwise every reload opens a
 * new pool and Atlas connection limits get exhausted fast.
 */
const globalForMongo = globalThis as typeof globalThis & {
  __mirrorfolioMongo?: Promise<MongoClient>;
};

function client(): Promise<MongoClient> {
  if (!globalForMongo.__mirrorfolioMongo) {
    const { MONGODB_URI } = serverEnv();
    globalForMongo.__mirrorfolioMongo = new MongoClient(MONGODB_URI, {
      // Fail fast rather than hanging a form submission for 30s.
      serverSelectionTimeoutMS: 5_000,
      connectTimeoutMS: 5_000,
      // Omit absent optional fields instead of storing them as explicit null,
      // so a round-tripped document still matches StoredLead.
      ignoreUndefined: true,
    }).connect();
  }
  return globalForMongo.__mirrorfolioMongo;
}

export async function leadsDb(): Promise<Db> {
  const { MONGODB_DB } = serverEnv();
  return (await client()).db(MONGODB_DB);
}

async function leadsCollection(): Promise<Collection<StoredLead>> {
  const { MONGODB_LEADS_COLLECTION } = serverEnv();
  return (await leadsDb()).collection<StoredLead>(MONGODB_LEADS_COLLECTION);
}

/** Cache the promise, not a boolean, so concurrent first calls share one run. */
let indexesEnsured: Promise<unknown> | undefined;

function ensureIndexes(collection: Collection<StoredLead>): Promise<unknown> {
  indexesEnsured ??= collection
    .createIndexes([
      { key: { receivedAt: -1 }, name: "receivedAt_desc" },
      { key: { intent: 1, receivedAt: -1 }, name: "intent_receivedAt" },
      { key: { email: 1 }, name: "email" },
    ])
    .catch((error) => {
      // Don't poison the cache — let the next request retry.
      indexesEnsured = undefined;
      throw error;
    });
  return indexesEnsured;
}

export type SaveOutcome = { sink: "mongodb" } | { sink: "dead-letter"; reason: string };

/**
 * Persist a lead. Mongo is tried first; if it is unreachable the lead is
 * appended to a dead-letter file so a database outage never costs a lead.
 * The `reason` is for server logs only — never return it to a client, it can
 * carry connection-string and host detail.
 */
export async function saveLead(lead: StoredLead): Promise<SaveOutcome> {
  try {
    const collection = await leadsCollection();
    await ensureIndexes(collection);
    await collection.insertOne(lead);
    return { sink: "mongodb" };
  } catch (error) {
    const reason = error instanceof Error ? error.message : "unknown error";
    console.error("[leads] mongodb write failed, falling back to dead-letter:", reason);
    await appendToDeadLetter(lead);
    return { sink: "dead-letter", reason };
  }
}

async function appendToDeadLetter(lead: StoredLead): Promise<void> {
  const { LEADS_DEAD_LETTER_FILE } = serverEnv();
  // The sink is runtime configuration, not a bundled asset. Without the ignore
  // comment Turbopack sees a dynamic path rooted at cwd and conservatively
  // traces the entire project into this route's serverless bundle.
  const path = isAbsolute(LEADS_DEAD_LETTER_FILE)
    ? LEADS_DEAD_LETTER_FILE
    : resolve(/* turbopackIgnore: true */ process.cwd(), LEADS_DEAD_LETTER_FILE);

  await mkdir(dirname(path), { recursive: true });
  await appendFile(path, `${JSON.stringify(lead)}\n`, { encoding: "utf8", mode: 0o600 });
  // appendFile's mode only applies on create; enforce it if the file pre-existed.
  await chmod(path, 0o600).catch(() => {});
}
