import { Trophy, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-6 md:py-8 border-t bg-card">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary-foreground" />
          <p className="text-sm text-muted-foreground">&copy; 2024 FUDU Hult Hub. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
            </Link>
        </div>
      </div>
    </footer>
  );
}
