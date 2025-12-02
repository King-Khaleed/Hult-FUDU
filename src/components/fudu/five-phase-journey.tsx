import { Reveal } from "@/components/animations/reveal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Laptop, Rocket, Star, Target, Trophy } from "lucide-react";

const phases = [
  {
    phase: 1,
    title: "QUALIFIERS",
    date: "Sept 2025 - Feb 2026",
    icon: Target,
    description:
      "Campus competition at FUDU. Submit your 1-pager, pitch deck, and video. Top teams advance to Nationals.",
    deadline: "FUDU Deadline: January 31st, 2026",
  },
  {
    phase: 2,
    title: "NATIONALS",
    date: "March - May 2026",
    icon: Trophy,
    description:
      "Compete at national level with winners from other universities. Top 1-2 teams per country advance to Incubator.",
  },
  {
    phase: 3,
    title: "DIGITAL INCUBATOR",
    date: "June - July 2026",
    icon: Laptop,
    description:
      "2-month virtual program. Mentorship, workshops, and product validation with world-class entrepreneurs. Refine your MVP.",
  },
  {
    phase: 4,
    title: "GLOBAL ACCELERATOR",
    date: "August 2026",
    icon: Rocket,
    description:
      "Month-long intensive in London. Daily workshops, investor meetings, and intense business model refinement. 6 teams selected as Finalists.",
  },
  {
    phase: 5,
    title: "GLOBAL FINALS",
    date: "September 2026",
    icon: Star,
    description:
      "Pitch to international judges for the $1M prize. Winner announced by Former President Bill Clinton.",
  },
];

export function FivePhaseJourney() {
  return (
    <section id="journey" className="w-full py-12 md:py-24 lg:py-32 bg-accent/50">
      <div className="container px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Your 5-Phase Journey
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From an idea on campus to a $1M social enterprise. Follow the path to global impact.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-12">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
            <div className="relative flex justify-between">
              {phases.map((phase, index) => (
                <div key={index} className="group relative flex flex-col items-center w-1/5">
                  <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:scale-110">
                    <phase.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="mt-12 text-center transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="font-bold text-sm uppercase tracking-wider text-primary-foreground">{`Phase ${phase.phase}`}</h3>
                    <p className="font-headline text-lg">{phase.title}</p>
                    <p className="text-xs text-muted-foreground">{phase.date}</p>
                  </div>
                   <div className="absolute bottom-full mb-14 w-64 p-4 bg-card shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <p className="text-sm text-card-foreground">{phase.description}</p>
                      {phase.deadline && <p className="text-xs font-semibold text-primary mt-2">{phase.deadline}</p>}
                      <div className="absolute left-1/2 -bottom-2 w-4 h-4 bg-card transform rotate-45 -translate-x-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden mt-12 max-w-md mx-auto">
             <div className="absolute left-6 top-0 h-full w-0.5 bg-border"></div>
              {phases.map((phase, index) => (
                <Reveal key={index}>
                    <div className="relative pl-16 mb-10">
                         <div className="absolute left-6 -translate-x-1/2 top-1 w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center">
                            <phase.icon className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">
                                    <span className="text-primary-foreground font-bold uppercase text-sm tracking-wider mr-2">{`Phase ${phase.phase}:`}</span>
                                    {phase.title}
                                </CardTitle>
                                <CardDescription>{phase.date}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{phase.description}</p>
                                {phase.deadline && <p className="text-sm font-semibold text-primary mt-2">{phase.deadline}</p>}
                            </CardContent>
                        </Card>
                    </div>
                </Reveal>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
