
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/animations/reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Registration() {
  const registrationUrl = "https://www.hultprize.org/en/register/";

  return (
    <section id="register" className="w-full py-12 md:py-24 lg:py-32 bg-accent/50">
      <div className="container px-4 md:px-6">
        <Reveal>
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold font-headline">Register for Hult Prize FUD 2026</CardTitle>
              <CardDescription>
                Click the button below to go to the official Hult Prize registration portal. Make sure to select "Federal University Dutse" as your campus.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
                <Button asChild size="lg" className="h-12 px-8 text-base">
                    <Link href={registrationUrl} target="_blank" rel="noopener noreferrer">
                        Go to Official Registration Page
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                    You will be redirected to an external website. Good luck!
                </p>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
