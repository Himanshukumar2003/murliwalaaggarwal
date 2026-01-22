import { Breadcrumb } from "@/components/breadcrumb";
import About from "./_componets/about";
import Image from "next/image";
export const metadata = {
  title: "Non-ATL Technology Learning Kits – BDS Education",
  description:
    "Browse Non-ATL educational kits from BDS Education for early-stage technology learning in robotics, coding, and creative engineering projects.",
  keywords: [
    "non ATL kits",
    "robotics education kits",
    "coding kits for kids",
    "tech learning components",
  ],
};

export default function Aboutus(params) {
  return (
    <>
      <Image
        src="/img/product-top.png"
        alt="banner"
        width={2000}
        height={2000}
        className="w-full   object-contain h-auto rounded-t-lg"
      ></Image>
      <About></About>
    </>
  );
}
