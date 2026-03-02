import { Breadcrumb } from "@/components/breadcrumb";
import About from "./_componets/about";
import Image from "next/image";

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
