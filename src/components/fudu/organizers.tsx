import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/animations/reveal";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    id: "organizer-1",
    name: "Salim Ahmad",
    role: "Campus Director",
    bio: "Leading the charge to empower FUDU students to create a better world through social entrepreneurship.",
    email: "ahmedsaleym7@gmail.com",
    avatarUrl: "/images/salim-ahmad.jpg",
  },
  {
    id: "organizer-2",
    name: "Khadijah Ibrahim",
    role: "Deputy Campus Director",
    bio: "Supporting the team and helping students navigate the competition process.",
    email: "khadijah.ibrahim@example.com",
    avatarUrl: "",
  },
  {
    id: "organizer-3",
    name: "Khalid Murtala",
    role: "Experts & Judges Support Team",
    bio: "Connecting teams with mentors and managing our panel of esteemed judges.",
    email: "khalid.murtala@example.com",
    avatarUrl: "",
  },
];

export function Organizers() {
  return (
    <section id="organizers" className="w-full py-12 md:py-24 lg:py-32 bg-accent/50">
      <div className="container px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Meet Your FUDU Hult Prize Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The passionate individuals dedicated to guiding you on your journey to impact.
              </p>
            </div>
          </div>
        </Reveal>
        
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {teamMembers.map((member) => {
            return (
              <Reveal key={member.id}>
                <Card className="h-full text-center flex flex-col max-w-sm mx-auto">
                    <CardHeader className="items-center">
                        <Avatar className="h-24 w-24 mb-4">
                            <AvatarImage src={member.avatarUrl} alt={member.name} />
                            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                        <p className="text-sm text-primary font-semibold">{member.role}</p>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                        <p className="text-muted-foreground flex-grow">{member.bio}</p>
                        <div className="mt-4">
                            <Link href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                                <Mail className="h-4 w-4" />
                                <span>Contact</span>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-12 text-center text-lg text-muted-foreground">
            We're here to support you every step of the way. Don't hesitate to reach out!
          </p>
        </Reveal>
      </div>
    </section>
  );
}
