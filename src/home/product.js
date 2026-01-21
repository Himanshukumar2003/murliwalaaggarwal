"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/lib/features/productsSlice";
import Heading from "@/components/ui/heading";
import ProductCard from "@/components/productcard";

export default function ProductSection() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [favorites, setFavorites] = useState(new Set());

  function toggleFavorite(id) {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <Heading
          title="Our Specialties"
          subtitle="Handcrafted with love and the finest ingredients"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
