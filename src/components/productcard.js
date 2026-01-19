"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import config from "@/config";

export default function ProductCard({
  product,
  favorites = new Set(), // ✅ default
  toggleFavorite = () => {}, // ✅ default
}) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="overflow-hidden transition-shadow duration-300 flex flex-col"
    >
      <div className="relative h-64 bg-secondary rounded-[10px] overflow-hidden">
        <Image
          width={500}
          height={500}
          src={`${config.file_base}${product.pictures?.[0]}`}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300  "
        />

        {/* <div className="absolute top-4 right-4">
          <Button
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(product.id);
            }}
            className="bg-white rounded-full p-2 shadow-md"
          >
            <Heart
              className={
                favorites.has(product.id)
                  ? "fill-red-500 text-red-500"
                  : "text-slate-400"
              }
            />
          </Button>
        </div> */}
      </div>

      <div className="flex-1 p-6 text-center">
        <h3 className="font-serif text-2xl h-[64px]">{product.title}</h3>
        <p className="text-sm text-slate-400  line-clamp-4">
          {product.description}
        </p>
        <div className="font-serif text-xl mt-2">₹{product.price}</div>
      </div>
    </Link>
  );
}
