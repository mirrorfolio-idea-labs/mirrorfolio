import { Nav } from "@/components/site/Nav";
import { SideRails } from "@/components/site/SideRails";
import { Footer } from "@/components/site/Footer";

/**
 * Site chrome. /hello sits outside this route group because the conference
 * landing page is deliberately standalone — no nav, no rails, no footer.
 */
export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-background text-foreground xl:pl-14 xl:pr-14">
      <Nav />
      <SideRails />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
