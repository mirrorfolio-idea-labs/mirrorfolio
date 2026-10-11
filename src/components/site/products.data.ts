import type { StaticImageData } from "next/image";

import hub from "@/assets/render-hub.jpg";
import pill from "@/assets/render-pill.jpg";
import box from "@/assets/render-nutrition.jpg";
import planter from "@/assets/render-vitals-planter.jpg";
import presence from "@/assets/render-presence.jpg";

export type Product = {
  name: string;
  status: "Shipping" | "In Development" | "Coming Soon";
  dimension: string;
  body: string;
  img?: StaticImageData;
  when?: string;
};

export const products: Product[] = [
  {
    name: "Home Hub",
    status: "In Development",
    dimension: "Intelligence · Routine",
    body: "Where the intelligence lives — the brain of the system, running inside the home. Every other module reports into it. It reads as a lamp on purpose: the hub belongs in a room, not on a shelf of devices.",
    img: hub,
    when: "Gen 8 prototype",
  },
  {
    name: "Pill Companion",
    status: "In Development",
    dimension: "Medication",
    body: "Senses medication interactions through natural presence. No pill counting. No bottle opening. Just timing and consistency.",
    img: pill,
    when: "Gen 8 prototype",
  },
  {
    name: "Nutrition Box",
    status: "In Development",
    dimension: "Hydration · Meals",
    body: "Observes hydration and meal patterns through natural kitchen use.",
    img: box,
    when: "Gen 8 prototype",
  },
  {
    name: "Vitals Planter",
    status: "In Development",
    dimension: "Vitals",
    body: "An artisanal ceramic pot with artificial plants on top. Contactless: it reads heart-rate and respiratory trends from across the room, with nothing worn and nothing to press, while reading, to anyone else, as decor.",
    img: planter,
    when: "Gen 9 in development",
  },
  {
    name: "Presence Sensor",
    status: "Coming Soon",
    dimension: "Safety",
    body: "A quiet ceiling disc, mounted like a smoke detector. It senses falls, with no camera, and signals for help without anyone having to ask.",
    img: presence,
    when: "Expected 2028",
  },
  {
    name: "More Add-ons",
    status: "Coming Soon",
    dimension: "Expanding",
    body: "The family keeps growing. Everyday objects — undisclosed for now — join the system as new dimensions of recovery become worth sensing.",
    when: "Undisclosed",
  },
];
