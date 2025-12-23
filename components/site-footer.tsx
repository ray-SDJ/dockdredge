import Link from "next/link";
import { Anchor, Instagram, Facebook, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Anchor className="h-6 w-6" />
              <span className="font-serif text-xl font-bold tracking-wide">
                DOCK & DREDGE
              </span>
            </Link>
            <p className="text-white/60 max-w-sm">
              Professional dredging services for Southwest Florida. Restoring
              access and value to your waterfront property.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-sm text-white/60">
              <p>2033 NW 1st Pl</p>
              <p>Cape Coral, FL 33993</p>
              <p className="pt-3">
                <a
                  href="tel:+12399638393"
                  className="hover:text-white transition-colors"
                >
                  (239) 963-8393
                </a>
                <br />
                <a
                  href="tel:+12394226430"
                  className="hover:text-white transition-colors"
                >
                  (239) 422-6430
                </a>
                <br />
                <a
                  href="tel:+12399447412"
                  className="hover:text-white transition-colors"
                >
                  (239) 944-7412
                </a>
              </p>
              <p className="pt-3">
                <a
                  href="mailto:Anthony@dock-dredge.com"
                  className="hover:text-white transition-colors"
                >
                  Anthony@dock-dredge.com
                </a>
                <br />
                <a
                  href="mailto:Nick@dock-dredge.com"
                  className="hover:text-white transition-colors"
                >
                  Nick@dock-dredge.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Dock & Dredge. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
