"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";

const leftFaqs = [
  {
    q: "Do you offer customization for bhaji boxes and sweets?",
    a: "Yes, we offer complete customization based on your occasion. You can choose the selection of sweets, box size, packaging style, and quantity as per weddings, poojas, festivals, or family functions.",
  },
  {
    q: "Is there any minimum order quantity?",
    a: "No, there is no minimum order quantity. You can place both small and bulk orders depending on your requirement.",
  },
  {
    q: "Do you take orders from outside your city?",
    a: "Yes, we accept orders from any location. Delivery options are planned based on distance, quantity, and product type to ensure freshness.",
  },
  {
    q: "How is the delivery process handled?",
    a: "Once your order is confirmed, our team plans packaging and dispatch accordingly. For local orders, we ensure same-day or scheduled delivery. For outstation orders, safe and secure transport is arranged.",
  },
  {
    q: "How fresh are the sweets and bhaji items?",
    a: "All sweets and bhaji items are prepared fresh using quality ingredients. We do not use artificial preservatives, ensuring authentic taste and purity.",
  },
];

const rightFaqs = [
  {
    q: "Can I place bulk orders for weddings and large functions?",
    a: "Absolutely. We regularly handle bulk orders for weddings, engagements, receptions, and community events with consistent quality and timely delivery.",
  },
  {
    q: "How early should I place my order?",
    a: "For regular orders, 1–2 days in advance is sufficient. For weddings and large functions, we recommend placing the order 7–10 days in advance for smooth planning and customization.",
  },
  {
    q: "Are your products 100% vegetarian?",
    a: "Yes, all our products are 100% vegetarian, prepared with strict hygiene standards.",
  },
  {
    q: "How can I place an order?",
    a: "You can place an order by contacting us directly through phone or WhatsApp, or by visiting our store. Our team will guide you through customization and delivery options.",
  },
  {
    q: "Do you follow hygiene and quality standards?",
    a: "Yes, we follow strict hygiene practices and quality checks at every stage to ensure safe, fresh, and premium products.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full py-16 ">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* HEADING */}
        <Heading
          title="Bhaji Box & Sweets Questions"
          subtitle="Everything you need to know before ordering"
          wrapperClass="pb-12"
          subtitleClass="text-gray-700"
          className="text-center"
        />

        {/* FAQ GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT FAQs */}
          <Accordion type="single" collapsible className="w-full space-y-2">
            {leftFaqs.map((item, i) => (
              <AccordionItem key={i} value={`left-${i}`}>
                <AccordionTrigger className="text-left text-xl font-semibold">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* RIGHT FAQs */}
          <Accordion type="single" collapsible className="w-full space-y-2">
            {rightFaqs.map((item, i) => (
              <AccordionItem key={i} value={`right-${i}`}>
                <AccordionTrigger className="text-left text-xl font-semibold">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-700">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
