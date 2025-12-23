import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-60">
        <Image
          src="/freepik__35mm-film-photography-airiel-picture-of-residentia__97370.png"
          alt="Marine construction background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

      <div className="relative container mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="max-w-4xl font-serif text-5xl font-medium leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Shaping the Coast of <br />
          <span className="italic text-white/90">Southwest Florida</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl font-light tracking-wide">
          Premier dredging services. Restoring depth and access for your
          waterfront lifestyle.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90 rounded-none px-8 text-base"
          >
            <a href="#contact">Start Your Project</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-black hover:bg-white/10 hover:text-black rounded-none px-8 text-base"
          >
            <a href="#services">Our Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
