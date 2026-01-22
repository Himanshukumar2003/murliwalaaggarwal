import { Breadcrumb } from "@/components/breadcrumb";
import { ContactForm } from "./_components/contact-form";
import { ContactSection } from "./_components/contact-section";
import { TestimonialsSection } from "./_components/testimonials-section";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Image
        src="/img/product-top.png"
        alt="banner"
        width={2000}
        height={2000}
        className="w-full   object-contain h-auto rounded-t-lg"
      ></Image>
      <ContactSection />
      <ContactForm />
      <TestimonialsSection />
    </>
  );
}
