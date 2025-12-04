"use client";

import { Heart, Truck, RotateCcw, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import ProductSection from "@/home/product";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSections, setSelectedSections] = useState({
    section1: "Df Roasted Lounge (10 pcs)",
    section2: "Anjeer Lounge (10 pcs)",
    section3: "Rose Launge (10 pcs)",
    section4: "Akhrot Launge (9 pcs)",
  });
  const [openDropdown, setOpenDropdown] = useState(null);

  const mainImages = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg"];
  const thumbnails = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg"];
  const sectionsData = {
    section1: [
      "Df Roasted Lounge (10 pcs)",
      "Premium Roasted Selection (12 pcs)",
      "Classic Roasted (8 pcs)",
    ],
    section2: [
      "Anjeer Lounge (10 pcs)",
      "Anjeer Deluxe (15 pcs)",
      "Anjeer Special (10 pcs)",
    ],
    section3: [
      "Rose Launge (10 pcs)",
      "Rose Premium (12 pcs)",
      "Rose Classic (8 pcs)",
    ],
    section4: [
      "Akhrot Launge (9 pcs)",
      "Akhrot Deluxe (12 pcs)",
      "Akhrot Special (9 pcs)",
    ],
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleSectionChange = (section, value) => {
    setSelectedSections((prev) => ({
      ...prev,
      [section]: value,
    }));
    setOpenDropdown(null);
  };

  return (
    <>
      <main className="min-h-screen bg-background pt-25">
        <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery - Left */}
            <div className="flex flex-col gap-4">
              {/* Main Image */}
              <div className="relative bg-muted rounded-lg overflow-hidden aspect-square flex items-center justify-center">
                <Image
                  src={mainImages[selectedImage] || "/placeholder.svg"}
                  alt="Sibu Lush product"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {thumbnails.map((thumb, index) => (
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
                      src={thumb || "/placeholder.svg"}
                      alt={`Product view ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details - Right */}
            <div className="flex flex-col gap-6">
              {/* Header with Favorite */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Sibu Lush
                  </h1>
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="text-2xl transition-colors"
                  aria-label="Add to favorites"
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

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  No reviews
                </span>
              </div>

              {/* Pricing */}
              <div className="flex items-center gap-3">
                <span className="text-3xl  italic text-secondary">$80.00</span>
                <span className="text-lg text-muted-foreground line-through">
                  $90.00
                </span>
                <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  SAVE 11%
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                Cheer on your favorite red and white team in eye-popping style
                with these red & white striped game bib overalls! Each pair is
                made of 100 percent cotton for a comfortable, breathable fit
                regardless of the weather and includ...
              </p>

              {/* Sections Dropdown Component */}
              <div className="space-y-6 mt-8">
                {Object.keys(selectedSections).map((sectionKey, index) => (
                  <div
                    key={sectionKey}
                    className="border border-secondary rounded-2xl px-4 py-2 shadow-sm bg-white hover:shadow-md transition-all duration-200"
                  >
                    {/* Label */}
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-800">
                        Section {index + 1}
                      </h3>

                      {/* Dropdown Button */}
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === sectionKey ? null : sectionKey
                          )
                        }
                        className="flex items-center gap-2 text-gray-700 bg-secondary/30 hover:bg-secondary/80 hover:text-white px-4 py-2 rounded-xl transition-all"
                      >
                        {selectedSections[sectionKey]}
                        <ChevronDown
                          className={`w-4 transition-transform ${
                            openDropdown === sectionKey ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Dropdown Content */}
                    {openDropdown === sectionKey && (
                      <div className="mt-4 bg-gray-50 border border-secondary rounded-xl p-3 animate-fadeIn">
                        {sectionsData[sectionKey].map((item) => (
                          <div
                            key={item}
                            onClick={() => {
                              setSelectedSections({
                                ...selectedSections,
                                [sectionKey]: item,
                              });
                              setOpenDropdown(null);
                            }}
                            className={`cursor-pointer p-3 rounded-lg mb-2 last:mb-0 transition-all 
                ${
                  selectedSections[sectionKey] === item
                    ? "bg-secondary/30 text-secondary font-semibold"
                    : "hover:bg-secondary hover:text-white"
                }
              `}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quantity & Cart Buttons */}
              <div className="flex gap-4 flex-col sm:flex-row">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-4 py-3 hover:bg-muted transition-colors"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => {
                      const val = Number.parseInt(e.target.value) || 1;
                      if (val > 0) setQuantity(val);
                    }}
                    className="w-16 text-center border-l border-r border-border py-3 bg-background"
                    min="1"
                  />
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-4 py-3 hover:bg-muted transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <Button
                  variant="outline"
                  className="flex-1 text-base font-semibold py-6 bg-transparent"
                >
                  ADD TO CART
                </Button>
              </div>

              {/* Buy Now Button */}
              <Button className="w-full bg-foreground text-background hover:bg-foreground/90 text-base font-semibold py-6">
                BUY IT NOW
              </Button>

              {/* Delivery & Returns Info */}
              <div className="border-t border-border pt-6 space-y-4">
                <div className="flex gap-3">
                  <Truck
                    size={20}
                    className="text-muted-foreground flex-shrink-0 mt-0.5"
                  />
                  <div className="text-sm">
                    <span className="font-semibold">
                      Estimate delivery times:
                    </span>
                    <span className="text-muted-foreground">
                      {" "}
                      12-26 days (International), 3-6 days (United States).
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <RotateCcw
                    size={20}
                    className="text-muted-foreground flex-shrink-0 mt-0.5"
                  />
                  <div className="text-sm">
                    <span className="font-semibold">Return within 45 days</span>
                    <span className="text-muted-foreground">
                      {" "}
                      of purchase. Duties & taxes are non-refundable.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-amber-50">
        <ProductSection></ProductSection>
      </div>
    </>
  );
}
