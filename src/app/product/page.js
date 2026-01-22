import { Suspense } from "react";
import ProductFillter from "./_components/productFilter";
import { Breadcrumb } from "@/components/breadcrumb";
import ProductActionBar from "./_components/product-slider";
import Image from "next/image";

export default function SearchPage(params) {
  return (
    <>
      <Image
        src="/img/product-top.png"
        alt="banner"
        width={2000}
        height={2000}
        className="w-full   object-contain h-auto rounded-t-lg"
      ></Image>

      <Suspense fallback="Loading...">
        <ProductFillter></ProductFillter>
      </Suspense>
    </>
  );
}
