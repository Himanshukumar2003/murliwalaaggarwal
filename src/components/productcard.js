"use client";

import Image from "next/image";
import Link from "next/link";
// import { Button } from "./ui/button";
// import { Heart } from "lucide-react";
import config from "@/config";
import { ArrowRight } from "lucide-react";

export default function ProductCard({
  product,
  favorites = new Set(), // ✅ default
  toggleFavorite = () => {}, // ✅ default
}) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          width={500}
          height={500}
          src={`${config.file_base}${product.pictures?.[0]}`}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-in-out" />

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full shadow-md">
          {product.category}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-6 ">
        <h3 className="font-serif text-xl font-[500] mb-3 line-clamp-2 min-h-[60px] text-gray-900">
          {product.title}
        </h3>

        {/* Price and Button */}
        <div className="flex gap-4 justify-between items-center">
          <div className="font-serif text-xl font-bold text-primary">
            ₹{product.price}
          </div>

          <div className="relative group inline-block">
            <div className="flex justify-center bg-primary py-2 px-5 rounded-2xl transition-all duration-500 group-hover:bg-primary/90">
              <span className="text-white font-medium text-lg flex items-center gap-2 relative">
                View
                <ArrowRight
                  className="ml-2 w-4 h-4 text-white hidden transition-all duration-500 
             group-hover:block group-hover:translate-x-1"
                />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
