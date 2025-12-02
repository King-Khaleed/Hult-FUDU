import { Header } from "@/components/fudu/header";
import { Hero } from "@/components/fudu/hero";
import { About } from "@/components/fudu/about";
import { WhatIsHultPrize } from "@/components/fudu/what-is-hult-prize";
import { FivePhaseJourney } from "@/components/fudu/five-phase-journey";
import { HowToParticipate } from "@/components/fudu/how-to-participate";
import { Eligibility } from "@/components/fudu/eligibility";
import { Timeline } from "@/components/fudu/timeline";
import { Resources } from "@/components/fudu/resources";
import { Faq } from "@/components/fudu/faq";
import { Registration } from "@/components/fudu/registration";
import { Organizers } from "@/components/fudu/organizers";
import { JoinCommunity } from "@/components/fudu/join-community";
import { Footer } from "@/components/fudu/footer";
import { WhatsappButton } from "@/components/fudu/whatsapp-button";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatIsHultPrize />
        <FivePhaseJourney />
        <HowToParticipate />
        <Eligibility />
        <About />
        <Timeline />
        <Resources />
        <Faq />
        <Registration />
        <Organizers />
        <JoinCommunity />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
