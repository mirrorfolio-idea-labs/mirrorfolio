"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function DataStorageSection() {
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-micro uppercase tracking-widest text-accent mb-6">
              How data is stored
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-8 mb-12">
              <div>
                <p className="text-body text-foreground font-medium mb-2">
                  Encryption
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  All data is encrypted in transit and at rest.
                  Industry-standard protocols, nothing experimental.
                </p>
              </div>

              <div>
                <p className="text-body text-foreground font-medium mb-2">
                  Storage location
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Data is stored on secure servers in India. We use established
                  cloud infrastructure with strong compliance records.
                </p>
              </div>

              <div>
                <p className="text-body text-foreground font-medium mb-2">
                  Retention
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Activity pattern data is retained only as long as needed for
                  the product to function. Historical data older than 90 days is
                  automatically deleted unless you choose to keep it.
                </p>
              </div>

              <div>
                <p className="text-body text-foreground font-medium mb-2">
                  Backups
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  We maintain encrypted backups for disaster recovery. These
                  follow the same retention and deletion policies.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
