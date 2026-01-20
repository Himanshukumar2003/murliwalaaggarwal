"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import http from "@/utils/http";
import { endpoints } from "@/utils/endpoints";
import config from "@/config";
import Link from "next/link";

export default function MenuWithCategory() {
  const [activeCategory, setActiveCategory] = useState(null);

  // Fetch PRODUCTS
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await http().get(endpoints.products.getAll);
      return data?.products ?? [];
    },
  });

  // Fetch CATEGORIES
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await http().get(endpoints.categories.getAll);
      return data?.categories ?? [];
    },
  });

  // Filter products based on active category
  const filteredProducts = useMemo(() => {
    const list = activeCategory
      ? products.filter((p) => String(p.category_id) === String(activeCategory))
      : products;
    return list.slice(0, 8); // show max 8 items
  }, [products, activeCategory]);

  // Framer Motion variants
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <section
      className="bg-secondary py-16"
      style={{
        backgroundImage: "url('/img/bg-3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 text-center text-white"
        >
          <h2 className="font-serif text-4xl lg:text-5xl">
            {" "}
            Taste the best that surprise you
          </h2>
        </motion.div>

        {/* GRID LAYOUT */}
        <div className="grid gap-8 lg:grid-cols-[minmax(280px,1fr)_3fr]">
          {/* CATEGORY MENU */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg bg-[#e8dcc8] p-8"
          >
            <nav className="grid gap-4">
              <motion.button
                layout
                onClick={() => setActiveCategory(null)}
                className={`w-full border-b pb-4 text-center font-serif text-sm uppercase tracking-wider transition-colors
                  ${
                    activeCategory === null
                      ? "text-[#2d3e2f] border-[#2d3e2f]"
                      : "text-[#2d3e2f]/70 border-[#2d3e2f]/20"
                  }`}
              >
                All Items
              </motion.button>

              {categories.map((cat) => (
                <motion.button
                  layout
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full border-b pb-4 text-center font-serif text-sm uppercase tracking-wider transition-colors
                    ${
                      activeCategory === cat.id
                        ? "text-[#2d3e2f] border-[#2d3e2f]"
                        : "text-[#2d3e2f]/70 border-[#2d3e2f]/20 hover:text-[#7a9278]"
                    }`}
                >
                  {cat.title}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* MENU ITEMS */}
          {/* MENU ITEMS */}

          {/* MENU ITEMS */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <AnimatePresence>
              {filteredProducts.map((itemData) => (
                <motion.div
                  key={itemData.id}
                  variants={item}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="group flex gap-4"
                  layout
                >
                  <Link
                    href={`/product/${itemData.slug}`}
                    className="flex gap-4 w-full"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={`${config.file_base}${itemData.pictures?.[0]}`}
                        alt={itemData.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <div className="flex-1 text-white">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-serif text-lg leading-snug">
                          {itemData.title}
                        </h3>
                        <span className="font-serif text-lg whitespace-nowrap">
                          ₹{itemData.price}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-white/60 line-clamp-2">
                        {itemData.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
