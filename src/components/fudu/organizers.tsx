"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/animations/reveal";
import { Eye } from "lucide-react";
import { useState } from "react";
import { MemberDialog } from "./member-dialog";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    id: "organizer-1",
    name: "Salim Ahmad",
    role: "Campus Director",
    bio: "Leading the charge to empower FUDU students to create a better world through social entrepreneurship. Salim is dedicated to fostering innovation and guiding teams to unlock their full potential.",
    email: "ahmedsaleym7@gmail.com",
    avatarUrl: "/images/salim-ahmad.jpeg",
    socials: {
        linkedin: "https://www.linkedin.com/in/salimahmad-sag?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        twitter: "https://x.com/sirbenzg?s=11"
    }
  },
  {
    id: "organizer-2",
    name: "Khadijah Ibrahim",
    role: "Deputy Campus Director",
    bio: "Supporting the team and helping students navigate the competition process. Khadijah ensures smooth operations and provides crucial assistance to all participants.",
    email: "khadijah.ibrahim@example.com",
    avatarUrl: "/images/khadijah-ibrahim.jpeg",
     socials: {
        linkedin: "https://www.linkedin.com/in/khadija-ibrahim-78114b274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: ""
    }
  },
  {
    id: "organizer-3",
    name: "Khalid Murtala",
    role: "Experts & Judges Support Team",
    bio: "Connecting teams with mentors and managing our panel of esteemed judges. Khalid plays a key role in bringing valuable industry expertise to the FUDU Hult Prize community.",
    email: "murtalakhalid12@gmail.com",
    avatarUrl: "/images/khalid-murtala.jpeg",
     socials: {
        linkedin: "https://www.linkedin.com/in/khalid-murtala",
        twitter: "https://twitter.com/khalidx_dev"
    }
  },
];

export function Organizers() {
  const [selectedMember, setSelectedMember] = useState(null);

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
                    <CardContent className="flex flex-col flex-grow items-center">
                        <p className="text-muted-foreground flex-grow px-4 text-sm">
                            {member.bio.split('. ')[0] + '.'}
                        </p>
                        <Button 
                            variant="outline" 
                            className="mt-6"
                            onClick={() => setSelectedMember(member as any)}
                        >
                            <Eye className="mr-2 h-4 w-4" />
                            View Full Bio
                        </Button>
                    </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
        
        {selectedMember && (
          <MemberDialog 
            member={selectedMember} 
            isOpen={!!selectedMember}
            onClose={() => setSelectedMember(null)} 
          />
        )}

        <Reveal>
          <p className="mt-12 text-center text-lg text-muted-foreground">
            We're here to support you every step of the way. Don't hesitate to reach out!
          </p>
        </Reveal>
      </div>
    </section>
  );
}
