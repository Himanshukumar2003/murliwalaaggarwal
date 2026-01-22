import Image from "next/image";
import ProductActionBar from "../_components/product-slider";
import ProductPage from "./_components/productPage";

export default async function BookPage({ params }) {
  const { slug } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/get-by-slug/${slug}`,
    { cache: "no-store" }
  );

  const data = await response.json();

  if (!data?.data) return <div>Not Found</div>;

  const product = data.data;
  return (
    <>
      {" "}
      <Image
        src="/img/product-top.png"
        alt="banner"
        width={2000}
        height={2000}
        className="w-full   object-contain h-auto rounded-t-lg"
      ></Image>
      <ProductActionBar product={product}></ProductActionBar>
      <ProductPage product={product} />
    </>
  );
}
