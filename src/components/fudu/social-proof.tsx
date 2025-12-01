import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Reveal } from "@/components/animations/reveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: "testimonial-avatar-1",
    name: "Jane Doe",
    program: "Hult Prize 2024 Participant",
    quote: "The Hult Prize was a transformative experience. It gave us the tools and confidence to turn our passion for social change into a viable business.",
  },
  {
    id: "testimonial-avatar-2",
    name: "John Smith",
    program: "Hult Prize 2023 Finalist",
    quote: "Going from a classroom idea to pitching at a regional summit was surreal. This competition pushes you to think bigger and bolder.",
  },
  {
    id: "testimonial-avatar-3",
    name: "Alex Ray",
    program: "Campus Winner 2025",
    quote: "The mentorship and support from the FUDU Hult Hub were invaluable. We learned so much about entrepreneurship in just a few months.",
  },
];

const projectLogos = PlaceHolderImages.filter(img => img.id.startsWith("project-logo-"));

export function SocialProof() {
  return (
    <section id="social-proof" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">From Our Community</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from past participants and see the success stories that started right here at FUDU.
              </p>
            </div>
          </div>
        </Reveal>
        
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const avatarImage = PlaceHolderImages.find(img => img.id === testimonial.id);
            return (
              <Reveal key={testimonial.id}>
                <Card className="h-full flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col justify-between">
                    <Quote className="w-8 h-8 text-accent mb-4" />
                    <blockquote className="text-lg italic flex-grow">"{testimonial.quote}"</blockquote>
                    <div className="flex items-center gap-4 mt-6">
                      <Avatar>
                        {avatarImage && (
                          <AvatarImage src={avatarImage.imageUrl} alt={avatarImage.description} data-ai-hint={avatarImage.imageHint} />
                        )}
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.program}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold tracking-tight mb-8 font-headline">Projects That Took Flight</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
              {projectLogos.map((logo) => (
                <div key={logo.id} className="grayscale hover:grayscale-0 transition-all">
                  <Image src={logo.imageUrl} alt={logo.description} width={150} height={75} className="object-contain" data-ai-hint={logo.imageHint} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
