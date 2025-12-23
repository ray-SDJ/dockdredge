import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Expertise born from <br />
              <span className="text-muted-foreground italic">
                experience & passion.
              </span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Dock & Dredge is a premier marine services firm serving all of
                Southwest Florida. We specialize in transforming waterways with
                precision dredging solutions.
              </p>
              <p>
                Our commitment to quality and environmental stewardship ensures
                that every project not only meets but exceeds the expectations
                of our clients. From residential canals to large-scale
                commercial operations, we bring professional expertise to the
                water&apos;s edge.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t">
              <div>
                <h3 className="font-serif text-2xl mb-2">Nick Delrocini</h3>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  Owner / Operator
                </p>
                <p className="text-muted-foreground">
                  Leading operations with hands-on expertise and a dedication to
                  structural integrity and design excellence.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-2">Anthony Carlo</h3>
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  Operations Manager
                </p>
                <p className="text-muted-foreground">
                  Driving growth and client relationships, ensuring seamless
                  project execution from concept to completion.
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-4/5 bg-muted overflow-hidden">
            <Image
              src="/freepik__the-style-is-candid-image-photography-with-natural__97369.png"
              alt="Dock & Dredge Team"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
