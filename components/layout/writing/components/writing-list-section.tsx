"use client";

import { FadeIn } from "@/components/ui/fade-in";

// Dummy blog posts data
const posts = [
  {
    id: 1,
    title: "Why we don't track location",
    excerpt:
      "The design decision behind keeping location data out of Mirrorfolio, and what it means for family dynamics.",
    date: "December 2025",
    readTime: "4 min read",
    category: "Design Decisions",
  },
  {
    id: 2,
    title: "The difference between awareness and surveillance",
    excerpt:
      "A framework for thinking about care technology that doesn't compromise dignity.",
    date: "November 2025",
    readTime: "6 min read",
    category: "Perspective",
  },
  {
    id: 3,
    title: "Building for edge cases, not demos",
    excerpt:
      "Real homes have messy situations. How we design for the exceptions, not just the happy path.",
    date: "November 2025",
    readTime: "5 min read",
    category: "Engineering",
  },
  {
    id: 4,
    title: "What we learned from 50 family conversations",
    excerpt:
      "Patterns from early research that shaped how Mirrorfolio works today.",
    date: "October 2025",
    readTime: "8 min read",
    category: "Research",
  },
  {
    id: 5,
    title: "The pilot program: how it works",
    excerpt:
      "A transparent look at what happens when you join the founding cohort.",
    date: "October 2025",
    readTime: "3 min read",
    category: "Updates",
  },
];

export function WritingListSection() {
  return (
    <section className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn>
          <p className="text-micro uppercase tracking-widest text-accent mb-6">
            Writing
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-foreground mb-6">
            Thinking out loud
          </h1>
          <p className="text-body-lg text-muted-foreground leading-relaxed mb-16 max-w-2xl">
            Notes on building care technology that respects boundaries. Design
            decisions, research findings, and the occasional update.
          </p>
        </FadeIn>

        <div className="space-y-0">
          {posts.map((post, index) => (
            <FadeIn key={post.id} delay={0.1 + index * 0.05}>
              <article className="group py-8 border-b border-border/50 last:border-b-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-micro text-accent mb-2">
                      {post.category}
                    </p>
                    <h2 className="font-serif text-heading text-foreground mb-3 group-hover:text-accent transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="md:text-right md:w-32 flex-shrink-0">
                    <p className="text-caption text-muted-foreground">
                      {post.date}
                    </p>
                    <p className="text-micro text-muted-foreground/70 mt-1">
                      {post.readTime}
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-caption text-muted-foreground">
              More writing coming soon. For now, these are placeholders.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
