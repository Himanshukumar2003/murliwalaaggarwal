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

  console.log(product);

  return <ProductPage product={product} />;
}
