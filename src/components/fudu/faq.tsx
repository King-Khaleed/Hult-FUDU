import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/animations/reveal";

const faqs = [
  {
    question: "Can students from different departments team up?",
    answer: "Yes! Your team can include students from any FUD department. You just need to register through FUD as your representing institution.",
  },
  {
    question: "Do we need a fully built product to apply?",
    answer: "No. You can apply with just a business idea, prototype, or MVP. The Hult Prize judges want to see your problem-solving approach, not a finished product.",
  },
  {
    question: "What if we've already started a business?",
    answer: "You're welcome to apply! Even if you've raised money or launched, you remain eligible as long as team members are current FUD students.",
  },
  {
    question: "When is the FUD application deadline?",
    answer: "The application deadline is January 31st, 2026.",
  },
  {
    question: "Can I apply as an individual?",
    answer: "No, you must form a team of 2-4 people. This is intentional - it teaches you to collaborate and build diverse teams.",
  },
  {
    question: "How are teams judged?",
    answer: "Judges evaluate on: problem impact, business viability, scalability, innovation, and team capability. You'll need a strong pitch deck and video explaining your idea.",
  },
  {
    question: "Is there a cost to participate?",
    answer: "No, it's completely free. Registration, mentorship, and training are all included.",
  },
  {
    question: "What if we don't have a business background?",
    answer: "Perfect! Hult Prize is designed for students from all backgrounds. You'll get mentorship and resources to learn as you go.",
  },
  {
    question: "Can we get mentorship before applying?",
    answer: "Yes! The organizing committee is available for 1-on-1 guidance. DM them in the WhatsApp group or email ahmedsaleym7@gmail.com.",
  },
  {
    question: "Where do I get templates and resources?",
    answer: "All resources (pitch templates, business model canvas, video tips) are available in the WhatsApp group and on this page.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-accent/50">
      <div className="container px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions? We've got answers. Here are some common queries about the Hult Prize competition.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-12 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="font-headline text-lg text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
