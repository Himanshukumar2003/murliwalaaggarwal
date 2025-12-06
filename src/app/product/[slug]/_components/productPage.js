"use client";

import { Heart, Truck, RotateCcw, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import config from "@/config";
import { AddToCartButtonProduct } from "@/components/cart-button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";

export default function ProductPage({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [bagPrint, setBagPrint] = useState(false);
  const [bagPrintText, setBagPrintText] = useState("");
  const [frontPrint, setFrontPrint] = useState(false);
  const [frontPrintText, setFrontPrintText] = useState("");
  const [frontPrintType, setFrontPrintType] = useState("");

  // DEBUG Logs
  console.log("Bag Print Text:", bagPrintText);
  console.log("Front Print Text:", frontPrintText);
  console.log("Front Print TYPE:", frontPrintType);

  // Dynamic sections
  const [selectedSections, setSelectedSections] = useState(
    product.sections?.map((section) => ({
      section: section.section,
      sweet: section.sweets[0].title,
    })) ?? []
  );

  const [openDropdown, setOpenDropdown] = useState(null);
  console.log("Selected Sections:", selectedSections);

  // Dynamic main images
  const pictures =
    product.pictures?.map((p) => `${config.file_base}${p}`) || [];

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity > 0) setQuantity(newQuantity);
  };

  return (
    <main className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* ================= LEFT IMAGES ================= */}
          <div className="flex flex-col gap-4 sticky top-[120px]">
            <div className="relative bg-muted rounded-lg overflow-hidden aspect-square flex items-center justify-center">
              <Image
                src={pictures[selectedImage]}
                alt="product-main-img"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {pictures.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden transition-all ${
                    selectedImage === index
                      ? "border-foreground"
                      : "border-border hover:border-muted-foreground"
                  }`}
                >
                  <Image
                    src={thumb}
                    alt="thumb"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start gap-4">
              <h1 className="text-3xl lg:text-4xl font-bold">
                {product.title}
              </h1>

              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="text-2xl transition-colors"
              >
                <Heart
                  size={28}
                  className={
                    isFavorite
                      ? "fill-red-500 text-red-500"
                      : "text-muted-foreground"
                  }
                />
              </button>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl italic text-secondary">
                ₹{product.price}{" "}
                <span className="text-sm text-primary">
                  / {product.weight} {product.weight_unit}
                </span>
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Meta Data */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-stone-200">
                <span className="text-stone-600">Category:</span>
                <span className="font-medium text-stone-900">
                  {product.category}
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-stone-200">
                <span className="text-stone-600">SKU:</span>
                <span className="font-medium text-stone-900">
                  {product.sku}
                </span>
              </div>

              {product.tags?.length > 0 && (
                <div className="pt-2">
                  <p className="text-stone-600 mb-2">Tags:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        className="bg-stone-200 text-stone-700 text-xs px-3 py-1 rounded-full border-0"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ================= Dynamic Sections ================= */}
            <div className="space-y-6 mt-8">
              {selectedSections?.map((section, idx) => (
                <div
                  key={idx}
                  className="border rounded-2xl px-4 py-2 bg-white"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Section {idx + 1}
                    </h3>

                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === section.section
                            ? null
                            : section.section
                        )
                      }
                      className="flex items-center gap-2 text-gray-700 bg-gray-100 hover:bg-secondary/80 hover:text-white px-4 py-2 rounded-xl"
                    >
                      {section.sweet}
                      <ChevronDown
                        className={`w-4 transition-transform ${
                          openDropdown === section.section ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {openDropdown === section.section && (
                    <div className="mt-4 bg-gray-50 border border-secondary rounded-xl p-3">
                      {product.sections
                        .find((s) => s.section === section.section)
                        .sweets.map((swt) => (
                          <div
                            key={swt.title}
                            onClick={() => {
                              setSelectedSections((prev) =>
                                prev.map((p) =>
                                  p.section === section.section
                                    ? { ...p, sweet: swt.title }
                                    : p
                                )
                              );
                              setOpenDropdown(null);
                            }}
                            className="cursor-pointer p-3 rounded-lg hover:bg-secondary hover:text-white transition-all"
                          >
                            {swt.title}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ================= BAG PRINT ================= */}
            <div className="space-y-3 bg-amber-50 p-5 rounded-2xl border-2 border-amber-200">
              <label className="flex items-center gap-3 font-semibold">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  checked={bagPrint}
                  onChange={(e) => setBagPrint(e.target.checked)}
                />
                🎁 Bag Print
              </label>

              {bagPrint && (
                <textarea
                  rows={3}
                  value={bagPrintText}
                  onChange={(e) => setBagPrintText(e.target.value)}
                  className="w-full p-4 border rounded-xl bg-white"
                  placeholder="Enter bag print text..."
                />
              )}
            </div>

            {/* ================= FRONT PRINT ================= */}
            <div className="space-y-3 bg-blue-50 p-5 rounded-2xl border-2 border-blue-200">
              <label className="flex items-center gap-3 font-semibold">
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  checked={frontPrint}
                  onChange={(e) => setFrontPrint(e.target.checked)}
                />
                ✏️ Print Sticker on Box
              </label>

              {frontPrint && (
                <>
                  <textarea
                    rows={3}
                    value={frontPrintText}
                    onChange={(e) => setFrontPrintText(e.target.value)}
                    className="w-full p-4 border rounded-xl bg-white"
                    placeholder="Enter front print text..."
                  />

                  <Select onValueChange={(value) => setFrontPrintType(value)}>
                    <SelectTrigger placeholder="Select Print Type">
                      Select Print Type
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Print Type</SelectLabel>
                        <SelectItem value="Birthday">Birthday</SelectItem>
                        <SelectItem value="Anniversary">Anniversary</SelectItem>
                        <SelectItem value="Custom">Custom</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </>
              )}
            </div>

            {/* ================= ADD TO CART ================= */}
            <div className="flex gap-4 flex-col sm:flex-row mt-4">
              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-4 py-3 hover:bg-muted"
                >
                  –
                </button>

                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-16 text-center border-l border-r py-3 bg-background"
                />

                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-4 py-3 hover:bg-muted"
                >
                  +
                </button>
              </div>

              <AddToCartButtonProduct
                product={{ product_id: product.id }}
                sections={selectedSections}
                bag_print={{ text: bagPrintText }}
                print_sticker_on_box={{
                  text: frontPrintText,
                  print_type: frontPrintType,
                }}
                slug={product.slug}
              />
            </div>

            <Button className="w-full py-6 font-semibold">BUY IT NOW</Button>

            {/* Delivery Info */}
            <div className="border-t border-border pt-6 space-y-4">
              <div className="flex gap-3">
                <Truck size={20} className="text-muted-foreground" />
                <p className="text-sm">Delivery in 3–6 days.</p>
              </div>

              <div className="flex gap-3">
                <RotateCcw size={20} className="text-muted-foreground" />
                <p className="text-sm">45 days return policy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
