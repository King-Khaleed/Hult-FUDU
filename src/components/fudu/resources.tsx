import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";
import { FileText, LayoutGrid, Video, BookOpen, Lightbulb, Users } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Pitch Deck Template",
    description: "Download our template with the structure judges want to see",
    buttonText: "Download (PPT)",
    href: "#",
  },
  {
    icon: LayoutGrid,
    title: "Business Model Canvas",
    description: "Fill out this one-pager to map your entire business model",
    buttonText: "Download (PDF)",
    href: "#",
  },
  {
    icon: Video,
    title: "Pitch Video Guide",
    description: "How to record a compelling 4-minute pitch video that stands out",
    buttonText: "Watch Guide",
    href: "#",
  },
  {
    icon: BookOpen,
    title: "UN SDGs Explainer",
    description: "Understand the 17 Sustainable Development Goals you'll align with",
    buttonText: "Learn More",
    href: "#",
  },
  {
    icon: Lightbulb,
    title: "Ideation Workbook",
    description: "Step-by-step workbook to validate your problem and solution",
    buttonText: "Download (PDF)",
    href: "#",
  },
  {
    icon: Users,
    title: "Success Stories",
    description: "Watch videos of past Hult Prize winners sharing their journey",
    buttonText: "Watch Now",
    href: "https://www.youtube.com/user/hultprize",
  },
];

export function Resources() {
  return (
    <section id="resources" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Resources to Get You Started</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to build a winning pitch is right here.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Reveal key={index}>
              <Card className="h-full flex flex-col transition-all hover:shadow-lg">
                <CardHeader className="items-center text-center">
                   <div className="bg-primary/20 p-4 rounded-full mb-4">
                        <resource.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  <CardTitle className="font-headline">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow text-center">
                  <CardDescription className="flex-grow">{resource.description}</CardDescription>
                  <Button asChild className="mt-6 w-full">
                    <Link href={resource.href} target={resource.href.startsWith("http") ? "_blank" : "_self"}>{resource.buttonText}</Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
