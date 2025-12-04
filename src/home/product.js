"use client";

import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";

const products = [
  {
    id: 1,
    name: "Croissants",
    price: 4.5,
    image: "/img/product1.JPG",
    description: "Flaky and delicate butter croissants",
  },
  {
    id: 2,
    name: "Sourdough Bread",
    price: 6.0,
    image: "/img/product2.JPG",
    description: "Freshly baked sourdough with tangy flavor",
  },
  {
    id: 3,
    name: "Chocolate Cake",
    price: 5.5,
    image: "/img/product3.JPG",
    description: "Decadent chocolate cake with silky frosting",
  },
  {
    id: 4,
    name: "Fruit Tart",
    price: 7.0,
    image: "/img/product4.JPG",
    description: "Beautiful tart with fresh seasonal fruits",
  },
  {
    id: 5,
    name: "Cinnamon Roll",
    price: 3.5,
    image: "/img/product5.JPG",
    description: "Soft, pillowy cinnamon rolls with icing",
  },
  {
    id: 6,
    name: "Matcha Donut",
    price: 4.0,
    image: "/img/product1.JPG",
    description: "Green matcha glazed donut with matcha dust",
  },
  {
    id: 7,
    name: "Croissants",
    price: 4.5,
    image: "/img/product1.JPG",
    description: "Flaky and delicate butter croissants",
  },
  {
    id: 8,
    name: "Sourdough Bread",
    price: 6.0,
    image: "/img/product2.JPG",
    description: "Freshly baked sourdough with tangy flavor",
  },
];

export default function ProductSection() {
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
            <div
              key={product.id}
              className=" overflow-hidden  transition-shadow duration-300 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-secondary">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="flex gap-2 absolute top-4 right-4">
                  <Button
                    size="icon"
                    onClick={() => toggleFavorite(product.id)}
                    className=" bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
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

                  <Button
                    onClick={() => addToCart(product.id)}
                    size="icon"
                    className={`transition-all duration-300  rounded-full p-2 shadow-md hover:shadow-lg  ${
                      cart.has(product.id)
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-primary/80 hover:bg-primary"
                    }`}
                  >
                    {cart.has(product.id) ? (
                      <span className="flex items-center gap-2">
                        <span className="text-xs">Added!</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <ShoppingCart size={16} />
                      </span>
                    )}
                  </Button>
                </div>
              </div>

              {/* Product Content */}
              <div className="flex-1 p-6 flex flex-col text-center">
                <div className="mb-4 flex-1 space-y-2">
                  <h3 className="font-serif text-2xl text-slate-900">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-400 ">
                    {product.description}
                  </p>

                  <span className="font-serif text-xl text-slate-900">
                    ₹{product.price.toFixed(2)}
                  </span>
                </div>

                {/* Price and Cart */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
