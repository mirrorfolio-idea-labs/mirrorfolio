import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {

  return (
    <>
      <Navbar />
      <div className="flex min-h-[70vh] items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-sentence text-foreground">404</h1>
          <p className="mb-6 text-xl text-muted-foreground font-statement">Oops! Page not found</p>
          <Link href="/" className="text-primary font-statement-medium hover:text-clay transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

