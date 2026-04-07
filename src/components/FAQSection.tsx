import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Do I need to book in advance?", a: "Strongly recommended on weekends. Walk-ins accepted on quieter nights subject to availability. Book online or via WhatsApp." },
  { q: "What is the dress code?", a: "Smart casual. Sportswear and flip-flops are not permitted. The team reserves the right to refuse entry at their discretion." },
  { q: "Is Triple 7 open every night?", a: "Yes! We are open everyday from 6:00 PM to 3:00 AM." },
  { q: "What is the minimum age?", a: "21 and over only. Valid government-issued ID required. No exceptions." },
  { q: "Is parking available?", a: "Paid parking in the Radisson Blu basement. Free parking available at nearby locations. Valet service at the hotel entrance (AED 30)." },
  { q: "Can I book for a large group?", a: "Yes. Groups of 10+ should contact the team directly via WhatsApp or the private hire form for a tailored package." },
  { q: "Is the food halal?", a: "Yes. All meat served at Triple 7 is halal-certified. Alcohol is served in a fully licensed bar area." },
  { q: "How do the arcade games work?", a: "Games operate on a credit system. Credits can be purchased at the venue. Your booking package includes an opening allocation of credits." },
  { q: "Can I book the whole venue privately?", a: "Yes. Triple 7 offers partial and full venue buyouts. Submit an enquiry via the Private Hire form for availability and pricing." },
  { q: "Is there live music every night?", a: "Live entertainment varies by night. Check the events calendar for specific nights with DJs or live bands." },
];

const FAQSection = () => (
  <section className="py-24 md:py-32 bg-deep-surface">
    <div className="container mx-auto px-4 md:px-8 max-w-3xl">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
          Frequently <span className="text-gradient-primary">Asked</span>
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-6 bg-card">
            <AccordionTrigger className="text-foreground text-left font-medium hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
