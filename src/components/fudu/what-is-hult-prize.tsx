import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/animations/reveal";
import { CircleDollarSign, Globe, Users, TrendingUp, Lightbulb, Rocket } from "lucide-react";

const stats = [
    {
        icon: CircleDollarSign,
        value: "$1M",
        label: "Prize Funding"
    },
    {
        icon: Globe,
        value: "130+",
        label: "Countries"
    },
    {
        icon: Users,
        value: "200K+",
        label: "Students"
    },
    {
        icon: TrendingUp,
        value: "5 Phases",
        label: "To Scale Your Idea"
    }
]

const benefits = [
    {
        icon: Lightbulb,
        title: "Validation",
        text: "Get expert feedback on your business idea from industry leaders"
    },
    {
        icon: Rocket,
        title: "Funding",
        text: "Access $1M seed funding to launch and scale your venture"
    },
    {
        icon: Users,
        title: "Network",
        text: "Connect with 1000s of impact-driven entrepreneurs globally"
    }
]

export function WhatIsHultPrize() {
  return (
    <section id="what-is" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <Reveal>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What is Hult Prize?</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            The world's largest student competition for social enterprises. Since 2010, over 1 million students from 130+ countries have participated. We're building the next generation of social entrepreneurs who solve real problems.
                        </p>
                    </div>
                </div>
            </Reveal>

            <Reveal>
                <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 sm:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:max-w-none">
                    {stats.map((stat) => (
                        <Card key={stat.label} className="flex flex-col items-center justify-center p-6 text-center">
                            <stat.icon className="h-10 w-10 text-primary-foreground mb-4" />
                            <h3 className="text-3xl font-bold font-headline">{stat.value}</h3>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </Card>
                    ))}
                </div>
            </Reveal>
            
            <div className="mx-auto max-w-5xl text-center">
                <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl font-headline mb-12">Why Participate?</h3>
                 <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
                    {benefits.map((benefit) => (
                        <Reveal key={benefit.title}>
                            <Card className="h-full bg-accent/30 border-0">
                                <CardHeader className="flex flex-col items-center text-center">
                                    <div className="bg-primary/20 p-4 rounded-full mb-4">
                                        <benefit.icon className="h-8 w-8 text-primary-foreground" />
                                    </div>
                                    <CardTitle className="font-headline">{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-muted-foreground">{benefit.text}</p>
                                </CardContent>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
