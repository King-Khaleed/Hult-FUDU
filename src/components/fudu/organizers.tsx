import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Reveal } from "@/components/animations/reveal";
import { Mail } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    id: "organizer-1",
    name: "[ORGANIZER NAME]",
    role: "Competition Lead",
    bio: "[Description of their background and role]",
    email: "[EMAIL]",
    avatarId: "organizer-avatar-1",
  },
  {
    id: "organizer-2",
    name: "[ORGANIZER NAME]",
    role: "Registration & Logistics",
    bio: "[Description]",
    email: "[EMAIL]",
    avatarId: "organizer-avatar-2",
  },
  {
    id: "organizer-3",
    name: "[ORGANIZER NAME]",
    role: "Mentorship & Resources",
    bio: "[Description]",
    email: "[EMAIL]",
    avatarId: "organizer-avatar-3",
  },
  {
    id: "organizer-4",
    name: "[ORGANIZER NAME]",
    role: "Community Manager",
    bio: "[Description]",
    email: "[EMAIL]",
    avatarId: "organizer-avatar-4",
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
        
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => {
            const avatarImage = PlaceHolderImages.find(img => img.id === member.avatarId);
            return (
              <Reveal key={member.id}>
                <Card className="h-full text-center flex flex-col">
                    <CardHeader className="items-center">
                        <Avatar className="h-24 w-24 mb-4">
                            {avatarImage && (
                                <AvatarImage src={avatarImage.imageUrl} alt={avatarImage.description} data-ai-hint={avatarImage.imageHint} />
                            )}
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                        <p className="text-sm text-primary-foreground font-semibold">{member.role}</p>
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
