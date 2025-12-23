import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link
          href="/Screen Shot 2025-12-15 at 4.24.30 PM.png"
          className="flex items-center gap-2"
        >
          <Image
            src="/Screen Shot 2025-12-15 at 4.24.30 PM.png"
            alt="Dock & Dredge Logo"
            width={120}
            height={120}
            className="h-16 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link
            href="#about"
            className="hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#services"
            className="hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="default" className="rounded-none">
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
