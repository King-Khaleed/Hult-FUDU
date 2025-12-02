import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";
import { CheckCircle2 } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";

const features = [
  {
    title: "Real-Time Deadline Alerts",
    description: "Never miss an important date",
  },
  {
    title: "Access to Templates & Resources",
    description: "Pitch deck, business model, guides",
  },
  {
    title: "Direct Mentorship Support",
    description: "Get advice from organizing committee",
  },
];

export function JoinCommunity() {
  return (
    <section id="join-community" className="w-full py-12 md:py-24 lg:py-32 bg-accent/50">
      <div className="container px-4 md:px-6">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Don't Miss Out on Updates</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join 300+ FUDU students in our WhatsApp community for real-time updates, resources, and support.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-4">
              <Button asChild size="lg" className="h-14 px-10 text-lg" style={{ backgroundColor: '#25D366', color: 'white' }}>
                <Link href="https://chat.whatsapp.com/J9zymi7BQNZ2HqRAm2cEHb" target="_blank" rel="noopener noreferrer">
                  <WhatsappIcon className="w-6 h-6 mr-3" />
                  Join Our WhatsApp Community
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground">
                Join now and get access to exclusive resources and updates.
              </p>
               <Link href="#faq" className="text-sm text-muted-foreground underline hover:no-underline">
                Questions first? Check our FAQ above ↑
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
