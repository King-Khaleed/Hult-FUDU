"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export type Member = {
  id: string;
  name: string;
  role: string;
  bio: string;
  email: string;
  avatarUrl: string;
  socials: {
    linkedin: string;
    twitter: string;
  };
};

interface MemberDialogProps {
  member: Member;
  isOpen: boolean;
  onClose: () => void;
}

export function MemberDialog({ member, isOpen, onClose }: MemberDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="items-center text-center">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src={member.avatarUrl} alt={member.name} />
            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <DialogTitle className="text-2xl font-headline">{member.name}</DialogTitle>
          <DialogDescription className="text-primary font-semibold">{member.role}</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-center text-muted-foreground">{member.bio}</p>
        </div>
        <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" asChild>
                <Link href={`mailto:${member.email}`}>
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                </Link>
            </Button>
             <Button variant="outline" size="icon" asChild>
                <Link href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
            </Button>
             <Button variant="outline" size="icon" asChild>
                <Link href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                </Link>
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
