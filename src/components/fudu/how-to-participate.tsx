import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/animations/reveal";
import { Users, Lightbulb, Pencil, ClipboardCheck, Trophy } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Form Your Team",
    description: "Gather 2-4 students from FUDU. Choose your co-founders based on complementary skills (tech, business, design, etc.)",
    icon: Users,
  },
  {
    number: "2",
    title: "Choose Your Challenge",
    description: "Pick a UN Sustainable Development Goal your business will address. Think healthcare, education, environment, finance, agriculture, etc.",
    icon: Lightbulb,
  },
  {
    number: "3",
    title: "Develop Your Idea",
    description: "Create a 1-page business summary, pitch deck (PPT), and record a 4-minute pitch video explaining your problem and solution.",
    icon: Pencil,
  },
  {
    number: "4",
    title: "Register Online",
    description: "Submit your application through the official Hult Prize portal by January 31st, 2026. Include all materials and team member details.",
    icon: ClipboardCheck,
  },
  {
    number: "5",
    title: "Compete & Win",
    description: "Pitch to FUDU judges, advance through 5 phases, and compete for $1M funding. Along the way, get mentorship and join a global community.",
    icon: Trophy,
  },
];

export function HowToParticipate() {
  return (
    <section id="how-to-participate" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">How FUDU Students Participate</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow these 5 steps to start your journey from campus to the global stage.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="mt-12 max-w-3xl mx-auto space-y-8">
          {steps.map((step) => (
            <Reveal key={step.number}>
              <Card className="flex flex-col md:flex-row items-start overflow-hidden">
                <div className="flex items-center justify-center bg-accent/50 p-6 md:p-8">
                  <span className="text-5xl font-bold text-primary/50">{step.number}</span>
                </div>
                <div className="flex-1">
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                     <div className="bg-primary/20 p-3 rounded-full">
                        <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
