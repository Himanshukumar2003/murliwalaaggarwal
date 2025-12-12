import { Breadcrumb } from "@/components/breadcrumb";
import ProductSection from "@/home/product";

export default function Product(params) {
  return (
    <>
      <Breadcrumb
        title="Our Sweets"
        items={[{ label: "Our Sweets", href: "/contact", isCurrent: true }]}
      />
      <ProductSection></ProductSection>
    </>
  );
}
