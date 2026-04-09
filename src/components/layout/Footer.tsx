import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="mb-6">
              <Image 
                src="/logo.svg" 
                alt="Mirrorfolio" 
                width={140} 
                height={28} 
                className="invert dark:invert-0 opacity-90 hover:opacity-100 transition-opacity" 
              />
            </div>
            <p className="font-sentence text-muted-foreground text-base max-w-xs leading-relaxed mb-6">
              Know they're okay — without being there.
            </p>
            <Link
              href="/early-access"
              className="inline-flex items-center gap-2 text-primary text-sm font-statement-medium hover:text-clay transition-colors"
            >
              Pre-order for ₹499 →
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-statement-medium uppercase tracking-[0.1em] text-dust mb-5">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { to: "/product", label: "How It Works" },
                { to: "/our-story", label: "Our Story" },
                { to: "/early-access", label: "Pre-order" },
              ].map((link) => (
                <Link
                  key={link.to}
                  href={link.to}
                  className="text-sm font-statement text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-statement-medium uppercase tracking-[0.1em] text-dust mb-5">
              Get in touch
            </p>
            <a
              href="mailto:hello@mirrorfolio.com"
              className="text-sm font-statement text-foreground hover:text-primary transition-colors block mb-2"
            >
              hello@mirrorfolio.com
            </a>
            <p className="text-sm font-statement text-muted-foreground mt-6">
              Made with care in Bangalore, India 🇮🇳
            </p>
          </div>
        </div>

        <div className="divider-warm mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-statement text-dust">
            © {new Date().getFullYear()} Mirrorfolio Idea Labs Pvt. Ltd.
          </p>
          <p className="text-xs font-statement text-dust tracking-[0.04em]">
            Built with conviction
          </p>
        </div>
      </div>
    </footer>
  );
}
