import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Transform Your Ideas Into $1M Impact
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl">
            Join Hult Prize 2026 from Federal University Dutse. Build a business that solves real problems. Change the world. Make $1 Million.
          </p>
          <div className="flex flex-col items-center space-y-2">
            <Button asChild size="lg">
              <Link href="#register">Start Your Journey</Link>
            </Button>
             <p className="text-sm">
                Learn how FUDU students are competing globally
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
