import { Breadcrumb } from "@/components/breadcrumb";
import { ContactForm } from "./_components/contact-form";
import { ContactSection } from "./_components/contact-section";
import { TestimonialsSection } from "./_components/testimonials-section";

export default function Contact() {
  return (
    <>
      <Breadcrumb
        title="Contact us"
        items={[{ label: "Contact us", href: "/contact", isCurrent: true }]}
      />

      <ContactSection />
      <ContactForm />
      <TestimonialsSection />
    </>
  );
}
