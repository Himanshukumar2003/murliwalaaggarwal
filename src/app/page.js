import AboutUs from "@/home/about";
import FAQ from "@/home/faq";
import Gallery from "@/home/gallery";
import HeroSection from "@/home/hero";
import ProductSection from "@/home/product";
import TestimonialCard from "@/home/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs></AboutUs>

      <ProductSection></ProductSection>
      <div className="  mb-10  container px-4 max-w-7xl mx-auto">
        <Image
          src="/img/banner.png"
          alt="banner"
          width={2000}
          height={2000}
          className="w-full   object-contain h-auto rounded-t-lg"
        ></Image>
      </div>
      <TestimonialCard></TestimonialCard>
      <Gallery></Gallery>

      <FAQ></FAQ>
    </>
  );
}
