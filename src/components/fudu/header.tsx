import { Trophy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* Placeholder for unified logo */}
            <div className="flex items-center justify-center h-8 w-32 bg-muted rounded-md">
                <span className="text-xs text-muted-foreground">Logo</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="#overview"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Overview
            </Link>
            <Link
              href="#timeline"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Timeline
            </Link>
            <Link
              href="#faq"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              FAQ
            </Link>
            <Link
              href="#register"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Register
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
