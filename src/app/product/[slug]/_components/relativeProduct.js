"use client";

import { useQuery } from "@tanstack/react-query";
import http from "@/utils/http";
import { endpoints } from "@/utils/endpoints";
import ProductCard from "@/components/productcard";

export default function RelatedProducts({ categoryId, currentProductId }) {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["related-products", categoryId],
    queryFn: async () => {
      const { data } = await http().get(
        `${endpoints.products.getAll}?category_id=${categoryId}`
      );
      return data?.products ?? [];
    },
    enabled: !!categoryId,
  });

  // remove current product
  const relatedProducts = products.filter((p) => p.id !== currentProductId);

  if (isLoading || relatedProducts.length === 0) return null;

  return (
    <section className="py-12 ">
      <div className="   container max-w-7xl px-4 mx-auto">
        <h2 className="mb-12 text-center font-serif text-4xl  text-[#2d3e2f] lg:text-5xl">
          Related Products
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
