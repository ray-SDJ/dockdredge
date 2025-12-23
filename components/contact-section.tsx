import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="flex flex-col justify-center items-center py-24 bg-primary text-primary-foreground">
      <div className="flex flex-col container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 justify-center items-center mx-auto">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              Let's discuss your <br />
              <span className="opacity-80 italic">next project.</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-md">
              Ready to enhance your waterfront property? Contact us today for a
              consultation and quote.
            </p>

            <div className="space-y-6 pt-8">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 mt-1 opacity-80" />
                <div>
                  <h3 className="font-medium text-lg">Headquarters</h3>
                  <p className="text-primary-foreground/70 leading-relaxed">
                    2033 NW 1st Pl
                    <br />
                    Cape Coral, Florida 33993
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 mt-1 opacity-80" />
                <div>
                  <h3 className="font-medium text-lg">Phone Number</h3>
                  <p className="text-primary-foreground/70">
                    +1 (239) 963 - 8393 <br />
                    +1 (239) 422 - 6430 <br />
                    +1 (239) 944 - 7412
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 mt-1 opacity-80" />
                <div>
                  <h3 className="font-medium text-lg">Email Us</h3>
                  <p className="text-primary-foreground/70">
                    Anthony@dock-dredge.com <br />
                    Nick@dock-dredge.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
