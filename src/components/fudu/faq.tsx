import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/animations/reveal";

const faqs = [
  {
    question: "Who is eligible to participate?",
    answer: "The Hult Prize is open to all current students (undergraduate, graduate, or PhD) from any university in the world. You must form a team of 3-4 students from the same university.",
  },
  {
    question: "What is the Hult Prize 2026 Challenge?",
    answer: "The specific challenge for 2026 has not been announced yet. It will be revealed in late 2025. Typically, it addresses a major global issue in areas like education, health, or sustainability.",
  },
  {
    question: "Do I need a fully developed business idea to register?",
    answer: "No, you don't need a perfect idea to start. The Hult Prize journey is designed to help you develop and refine your concept with a team. Enthusiasm and a passion for social change are the most important ingredients.",
  },
  {
    question: "How are the teams judged?",
    answer: "Teams are judged on a variety of criteria, including the viability of their business model, its potential for social impact, scalability, and the team's strength and cohesion.",
  },
  {
    question: "What support is available for participants?",
    answer: "Participants in the on-campus program at FUDU will have access to workshops, mentorship from faculty and local entrepreneurs, and networking events to help them build a strong foundation for their social enterprise.",
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
