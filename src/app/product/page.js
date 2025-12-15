import { Suspense } from "react";
import ProductFillter from "./_components/search-bar";
import { Breadcrumb } from "@/components/breadcrumb";

export default function SearchPage(params) {
  return (
    <>
      <Breadcrumb
        title="Products"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "product",
            href: "/product",
            isCurrent: true,
          },
        ]}
      />

      <Suspense fallback="Loading...">
        <ProductFillter></ProductFillter>
      </Suspense>
    </>
  );
}
