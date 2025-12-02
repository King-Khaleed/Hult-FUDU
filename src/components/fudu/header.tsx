import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-17 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/images/fudu-hult-logo.png" alt="FUDU Hult Prize Logo" width={70} height={15} />
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
              href="#resources"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Resources
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
