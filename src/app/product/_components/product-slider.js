"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import config from "@/config";
import { Minus, Plus } from "lucide-react";

export default function ProductActionBar({ product }, updatedPrice) {
  const [showBar, setShowBar] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    function handleScroll() {
      setShowBar(window.scrollY > 800);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`hidden lg:flex    fixed bottom-0 left-0 w-full z-[999]
      transition-all duration-500 ease-[cubic-bezier(0,.97,.43,1)]
      ${showBar ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
    >
      <div className="border-t bg-white shadow-2xl w-full">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* LEFT : Image + Title + Price */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <Image
              src={`${config.file_base}${product.pictures?.[0]}`}
              alt={product.title}
              width={64}
              height={64}
              className="w-16 h-16 rounded-lg object-cover border"
            />

            <div className="flex flex-col min-w-0">
              <h3 className="font-semibold text-gray-800 text-sm md:text-base line-clamp-1">
                {product.title}
              </h3>
              <span className="text-primary font-bold text-lg">
                ₹{updatedPrice}
              </span>
            </div>
          </div>

          {/* MIDDLE : Quantity */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity === 1}
              className="w-9 h-9 flex items-center justify-center border rounded-md
              disabled:opacity-40 hover:bg-gray-100 transition"
            >
              <Minus size={16} />
            </button>

            <span className="w-8 text-center font-semibold">{quantity}</span>

            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-9 h-9 flex items-center justify-center border rounded-md
              hover:bg-gray-100 transition"
            >
              <Plus size={16} />
            </button>
          </div>

          {/* RIGHT : CTA Buttons */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              className="flex-1 md:flex-none bg-primary text-white px-6 py-2 rounded-lg font-semibold
              hover:bg-primary/90 transition-all"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
