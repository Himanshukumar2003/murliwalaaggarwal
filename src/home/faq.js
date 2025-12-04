"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";

const faqData = [
  {
    q: "There are many bread brands out there, what makes yours special?",
    a: "We use high-quality ingredients and traditional methods to create premium breads that stand out from the competition.",
  },
  {
    q: "Are you certified kosher?",
    a: "Yes, all of our bread products are produced under kosher supervision.",
  },
  {
    q: "What is the difference between your fresh and frozen breads?",
    a: "Fresh breads are delivered daily, while frozen breads allow for longer storage without sacrificing quality.",
  },
  {
    q: "How do I become a fresh wholesale customer?",
    a: "Contact our wholesale department and we’ll help set up your account.",
  },
  {
    q: "How can I purchase your frozen breads wholesale?",
    a: "Frozen wholesale products can be ordered through our distribution partners.",
  },
  {
    q: "Where are you located?",
    a: "We operate from multiple bakeries nationwide. Contact us to find the nearest location.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full py-16 bg-amber-50">
      <div className="container mx-auto px-6 max-w-7xl md:grid md:grid-cols-2 gap-10 ">
        {/* LEFT SIDE */}
        <div className="col-span-1">
          <div className="lg:sticky top-[100px]">
            <Heading
              tag="Best Cakes"
              title="Delicious Collections"
              subtitle="Freshly baked everyday"
              wrapperClass="py-10"
              subtitleClass="text-gray-700"
              className="text-left mb-4   "
            />

            <Button
              variant="outline"
              className="relative mt-0 rounded-none min-h-[50px] uppercase bg-transparent border border-primary text-primary 
            leading-normal inline-block text-center text-md font-semibold tracking-[0.32px] 
            transition-all duration-500 ease-[cubic-bezier(0,.97,.43,1)] hover:border-primary 
            hover:text-white hover:bg-primary"
            >
              BOOK A TABLE
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-1">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqData.map((item, i) => (
              <AccordionItem key={i} value={`item-${i + 1}`}>
                <AccordionTrigger className="text-left text-2xl   font-[600]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-lg">
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
