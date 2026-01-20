import AboutUs from "@/home/about";
import Blogs from "@/home/blog";
import FAQ from "@/home/faq";
import FeaturesSection from "@/home/FeaturesSection";
import Gallery from "@/home/gallery";
import HeroSection from "@/home/hero";
import Menu from "@/home/menu";
import ProductSection from "@/home/product";
import VideoSwiper from "@/home/reel";
import TestimonialCard from "@/home/testimonials";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs></AboutUs>
      <FeaturesSection></FeaturesSection>
      <div className="  mb-10  container px-4 max-w-7xl mx-auto">
        <Link href="/product">
          <Image
            src="/img/banner.png"
            alt="banner"
            width={2000}
            height={2000}
            className="w-full   object-contain h-auto rounded-t-lg"
          ></Image>
        </Link>
      </div>
      <ProductSection></ProductSection>

      <Menu></Menu>
      <VideoSwiper></VideoSwiper>
      <Gallery></Gallery>

      <Blogs></Blogs>
      <TestimonialCard></TestimonialCard>
      <FAQ></FAQ>
    </>
  );
}
