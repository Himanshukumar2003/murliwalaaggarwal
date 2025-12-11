import { Breadcrumb } from "@/components/breadcrumb";
import { ContactForm } from "./_componet/contact-form";
import { ContactSection } from "./_componet/contact-section";
import { TestimonialsSection } from "./_componet/testimonials-section";

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
