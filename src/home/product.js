"use client";

import { useState, useEffect } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/lib/features/productsSlice";
import Image from "next/image";
import config from "@/config";
import AddToCartButton from "@/components/cart-button";
import Link from "next/link";

export default function ProductSection() {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);

  const [favorites, setFavorites] = useState(new Set()); // Initialize as Set
  const [cart, setCart] = useState(new Set()); // Initialize as Set

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const addToCart = (id) => {
    const newCart = new Set(cart);
    newCart.add(id);
    setCart(newCart);
    setTimeout(() => {
      const updatedCart = new Set(cart);
      updatedCart.delete(id);
      setCart(updatedCart);
    }, 2000);
  };

  return (
    <section className="py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        <Heading
          tag="Sweet Treats"
          title="Our Specialties"
          subtitle=" Handcrafted with love and the finest ingredients"
          subtitleClass="text-gray-700"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              href={`/product/${product.slug}`}
              key={product.id}
              className="overflow-hidden transition-shadow duration-300 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-secondary">
                <Image
                  width={500}
                  height={500}
                  src={`${config.file_base}${product.pictures[0]}`}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />

                <div className="flex gap-2 absolute top-4 right-4">
                  <Button
                    size="icon"
                    onClick={() => toggleFavorite(product.id)}
                    className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
                    aria-label="Add to favorites"
                  >
                    <Heart
                      className={
                        favorites.has(product.id)
                          ? "fill-red-500 text-red-500"
                          : "text-slate-400"
                      }
                    />
                  </Button>
                  {/* <AddToCartButton
                    product={{
                      product_id: product.id,
                    }}
                  /> */}
                </div>
              </div>

              {/* Product Content */}
              <div className="flex-1 p-6 flex flex-col text-center">
                <div className="mb-4 flex-1 space-y-2">
                  <h3 className="font-serif text-2xl text-slate-900">
                    {product.title}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {product.description}
                  </p>

                  <span className="font-serif text-xl text-slate-900">
                    ₹{product.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
