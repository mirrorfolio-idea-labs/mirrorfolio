import { SectionRail } from "./Section";

export function Gap() {
  return (
    <section className="border-b border-border">
      <SectionRail index="01" label="The gap" note="Hospital → Home" />

      <div className="grid md:grid-cols-4">
        <div className="border-b border-border p-5 md:col-span-2 md:border-b-0 md:border-r md:p-8">
          <h2 className="display-caps text-[clamp(1.8rem,3.4vw,3rem)]">
            Recovery becomes
            <br />
            invisible the moment
            <br />
            <span className="text-muted-foreground">
              someone walks through
              <br />
              their front door.
            </span>
          </h2>
        </div>

        <div className="flex flex-col justify-between md:col-span-2">
          <div className="border-b border-border p-5 md:p-8">
            <p className="max-w-[52ch] text-sm leading-relaxed text-muted-foreground md:text-base">
              Hospitals monitor continuously. Families call occasionally.
              Clinicians see snapshots weeks apart. Between those moments, small
              changes in routine — medication delayed, walking reduced, rest
              disrupted — go unnoticed until they become emergencies.
            </p>
          </div>
          <div className="bg-ink p-5 text-ink-foreground brackets md:p-8">
            <div className="mono-label text-ink-foreground/60">
              The discharge cliff
            </div>
            <div className="display-caps mt-3 text-3xl md:text-4xl">37%</div>
            <p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-ink-foreground/75">
              of heart-failure patients are readmitted within 60 days of
              discharge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
