"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import http from "@/utils/http";
import { endpoints } from "@/utils/endpoints";
import config from "@/config";

export default function MenuWithCategory() {
  const [activeCategory, setActiveCategory] = useState(null);

  // PRODUCTS
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await http().get(endpoints.products.getAll);
      return data?.products ?? [];
    },
  });

  // CATEGORIES
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await http().get(endpoints.categories.getAll);
      return data?.categories ?? [];
    },
  });

  // FILTER PRODUCTS
  const filteredProducts = useMemo(() => {
    let list = activeCategory
      ? products.filter((p) => String(p.category_id) === String(activeCategory))
      : products;

    return list.slice(0, 8);
  }, [products, activeCategory]);

  // ANIMATION VARIANTS
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
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
          <p className="text-sm uppercase tracking-wider text-white/70">
            Taste the best that surprise you
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl">Our Special Menu</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* LEFT: CATEGORY MENU */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-lg bg-[#e8dcc8] p-8"
          >
            <nav className="space-y-6">
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

          {/* RIGHT: MENU ITEMS */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory ?? "all"}
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-wrap gap-6"
            >
              {filteredProducts.map((itemData) => (
                <motion.div
                  key={itemData.id}
                  variants={item}
                  className="flex w-full sm:w-[48%] items-start gap-4 group"
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
                    <div className="flex justify-between gap-2">
                      <h3 className="font-serif text-lg">{itemData.title}</h3>
                      <span className="font-serif text-lg">
                        ₹{itemData.price}
                      </span>
                    </div>
                    <p className="text-sm text-white/60 line-clamp-2">
                      {itemData.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
