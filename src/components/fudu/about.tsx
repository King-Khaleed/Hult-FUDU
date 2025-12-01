import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/animations/reveal";
import { Trophy, Users, Target } from "lucide-react";

export function About() {
  return (
    <section id="overview" className="w-full py-12 md:py-24 lg:py-32 bg-accent/50">
      <div className="container px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What is the Hult Prize?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The Hult Prize is a global movement that challenges young people to solve the world's most pressing issues through social entrepreneurship. It's more than a competition; it's a platform for change.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
            <Reveal>
                <Card className="h-full">
                    <CardHeader className="flex flex-col items-center text-center">
                        <div className="bg-primary/20 p-4 rounded-full mb-4">
                            <Trophy className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <CardTitle className="font-headline">The Competition</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Compete against teams from over 100 countries. The winning team receives $1 million in seed capital to launch their social enterprise.</p>
                    </CardContent>
                </Card>
            </Reveal>
            <Reveal>
                <Card className="h-full">
                    <CardHeader className="flex flex-col items-center text-center">
                        <div className="bg-primary/20 p-4 rounded-full mb-4">
                            <Users className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <CardTitle className="font-headline">Eligibility</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Open to all current university students. Form a team of 3-4 members from your university and get ready to pitch your idea.</p>
                    </CardContent>
                </Card>
            </Reveal>
            <Reveal>
                <Card className="h-full">
                    <CardHeader className="flex flex-col items-center text-center">
                        <div className="bg-primary/20 p-4 rounded-full mb-4">
                            <Target className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <CardTitle className="font-headline">The Benefits</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p>Gain entrepreneurial skills, network with global leaders, and get mentorship from experts to turn your vision into reality.</p>
                    </CardContent>
                </Card>
            </Reveal>
        </div>
      </div>
    </section>
  );
}
