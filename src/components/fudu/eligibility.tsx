import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/animations/reveal";
import { CheckCircle2 } from "lucide-react";

const eligibilityCriteria = [
    "Currently enrolled at Federal University Dutse (any program)",
    "At least 18 years old",
    "Team has 2-4 members",
    "Have a for-profit business idea (not a non-profit)",
    "Business addresses at least one UN Sustainable Development Goal",
    "Can dedicate time to development and pitch preparation",
];

export function Eligibility() {
  return (
    <section id="eligibility" className="w-full py-12 md:py-24 lg:py-32 bg-accent/50">
      <div className="container px-4 md:px-6">
        <Reveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Are You Eligible?</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        See if you and your team meet the requirements to join the competition.
                    </p>
                </div>
            </div>
        </Reveal>
        <Reveal>
          <div className="max-w-3xl mx-auto mt-12">
            <Card className="bg-primary/10 border-primary/50">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-headline text-primary-foreground">Quick Eligibility Check</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {eligibilityCriteria.map((item, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                <span className="text-lg text-foreground/90">{item}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            <div className="text-center mt-8 space-y-2">
                <p className="text-xl">If you check all boxes, you're ready to apply! 🎉</p>
                <Link href="#faq" className="text-muted-foreground underline hover:no-underline">
                    Still have questions?
                </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
