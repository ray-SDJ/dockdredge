import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Dredging Services",
    description:
      "Specialized dredging solutions for residential and commercial waterways. We provide channel deepening, maintenance dredging, and environmental restoration to improve navigation and water access. Our team uses state-of-the-art mechanical and hydraulic equipment to ensure precision and minimal environmental impact.",
    image: "/ChatGPT Image Dec 17, 2025, 01_55_38 PM.png",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Services</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Expert dredging solutions for residential and commercial clients
            across Southwest Florida.
          </p>
        </div>

        <div className="grid gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative grid md:grid-cols-2 gap-8 md:gap-16 items-center border-t pt-12 pb-12 first:border-t-0"
            >
              <div className="order-2 md:order-1 space-y-6">
                <span className="text-6xl font-serif text-muted-foreground/20 font-bold">
                  {service.id}
                </span>
                <h3 className="text-3xl font-serif">{service.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  {service.description}
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4"
                >
                  Request Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="order-1 md:order-2 relative aspect-video md:aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
