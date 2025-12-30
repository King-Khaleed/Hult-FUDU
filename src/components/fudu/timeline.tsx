import { CalendarDays, Flag, Trophy, Rocket } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";

const timelineEvents = [
  {
    icon: CalendarDays,
    date: "September 2025",
    title: "Registration Opens",
    description: "Form your teams and sign up to participate in the FUD on-campus program.",
  },
  {
    icon: Flag,
    date: "November 2025",
    title: "Campus Qualifiers",
    description: "Pitch your innovative idea to a panel of judges. The best teams advance.",
  },
  {
    icon: Rocket,
    date: "March 2026",
    title: "Regional Summits",
    description: "Winning teams from campus qualifiers compete at regional summits around the world.",
  },
  {
    icon: Trophy,
    date: "September 2026",
    title: "Global Finals",
    description: "The top teams pitch at the United Nations for the $1 million grand prize.",
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Competition Timeline</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Key dates and milestones for the Hult Prize FUD 2026 journey. Don't miss out!
              </p>
            </div>
          </div>
        </Reveal>
        <div className="relative mt-12 max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
          {timelineEvents.map((event, index) => (
            <Reveal key={index}>
              <div className="relative mb-12">
                <div className="flex items-center">
                  <div className={`flex-1 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="p-4 rounded-lg bg-card shadow-md">
                      <p className="font-bold font-headline text-primary">{event.title}</p>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                      <p className="text-sm mt-2">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border-2 border-primary">
                    <event.icon className="w-6 h-6 text-primary" />
                  </div>
                   <div className="flex-1"></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
