"use client";

import { Truck, RotateCcw, ChevronDown, Minus, Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import config from "@/config";
import { AddToCartButtonProduct } from "@/components/cart-button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { useSelector } from "react-redux";

import {
  deleteCartItem,
  getCartItems,
  updateCartItem,
} from "@/services/cart-services";

import { toast } from "sonner";
import Link from "next/link";
import { useAuth } from "@/providers/auth-provider";
import RelatedProducts from "./relativeProduct";
import { ProductDetails } from "./ProductDetails";
import ProductActionBar from "../../_components/product-slider";

export default function ProductPage({ product, price }) {
  console.log({ product });
  const [selectedImage, setSelectedImage] = useState(0);
  const [bagPrint, setBagPrint] = useState(false);
  const [bagPrintText, setBagPrintText] = useState("");
  const [frontPrint, setFrontPrint] = useState(false);
  const [frontPrintText, setFrontPrintText] = useState("");
  const [frontPrintType, setFrontPrintType] = useState("paper_cut");
  // const [updatedPrice, setUpdatedPrice] = useState(product.price);

  const queryClient = useQueryClient();

  const { user } = useAuth();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const { mutate } = useMutation({
    mutationFn: ({ id, ...data }) => updateCartItem(id, { ...data }),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
      queryClient.invalidateQueries(["cart-items"]);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: ({ id }) => deleteCartItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
      queryClient.invalidateQueries(["cart-items"]);
    },
  });

  const {
    data: cartItems,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["cart-items", isCartOpen],
    queryFn: async () => {
      const { data } = await getCartItems();
      return data;
    },
    enabled: !!user,
  });

  const isAddedToCart = useMemo(() => {
    if (cartItems) {
      return cartItems?.find((c) => c.product_id === product.id) ?? null;
    }
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🧠 Automatically handle out-of-stock and over-quantity items
  useEffect(() => {
    if (!cartItems?.length) return;

    let removedCount = 0;
    let updatedCount = 0;

    cartItems.forEach((item) => {
      // Remove out of stock
      if (item.stock <= 0) {
        deleteMutation.mutate({ id: item.id });
        removedCount++;
      }
      // If quantity > stock, adjust to stock
      else if (item.quantity > item.stock) {
        mutate({ id: item.id, quantity: item.stock });
        updatedCount++;
      }
    });

    if (removedCount > 0) {
      toast.error(
        `${removedCount} item${
          removedCount > 1 ? "s" : ""
        } removed due to out of stock.`
      );
    }

    if (updatedCount > 0) {
      toast.success(
        `${updatedCount} item${
          updatedCount > 1 ? "s" : ""
        } quantity adjusted to available stock.`
      );
    }
  }, [cartItems]);
  // DEBUG Logs
  // console.log("Bag Print Text:", bagPrintText);
  // console.log("Front Print Text:", frontPrintText);
  // console.log("Front Print TYPE:", frontPrintType);

  // Dynamic sections
  const [selectedSections, setSelectedSections] = useState(
    product.sections?.map((section) => ({
      section: section.section,
      sweet: section.sweets[0].title,
      price: section.sweets[0].price,
    })) ?? []
  );

  const updatedPrice = useMemo(() => {
    const selectedSectionsPrice = selectedSections
      .map((s) => s.price)
      .reduce((accu, curr) => accu + curr, 0);

    return product.price + selectedSectionsPrice;
  }, [selectedSections, product]);

  const [openDropdown, setOpenDropdown] = useState(null);
  // console.log("Selected Sections:", selectedSections);

  // Dynamic main images
  const pictures =
    product.pictures?.map((p) => `${config.file_base}${p}`) || [];

  return (
    <>
      <main className=" bg-background py-12 overflow-visible">
        <div className="max-w-7xl px-4 mx-auto overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 overflow-visible">
            {/* ================= LEFT IMAGES ================= */}
            <div className="flex flex-col lg:flex-row gap-4 lg:sticky lg:top-[120px] lg:self-start">
              {/* MAIN IMAGE */}
              <div className="order-1 lg:order-2 relative bg-muted rounded-lg overflow-hidden aspect-square flex-1 w-full h-[400px]">
                <Image
                  src={pictures[selectedImage] || "/placeholder.svg"}
                  alt="product-main-img"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* THUMBNAILS */}
              <div className="order-2 lg:order-1 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[500px]">
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
                      src={thumb || "/placeholder.svg"}
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
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                {/* <span className="text-3xl italic text-secondary">
                  ₹{product.updatedPrice}
                </span> */}
                <span className="text-3xl italic text-secondary">
                  ₹{updatedPrice}
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
                <div className="flex justify-between py-2 border-b border-stone-200">
                  <span className="text-stone-600">Net wt.</span>
                  <span className="font-medium text-stone-900">
                    <span className="text-sm text-primary">
                      {product.weight} {product.weight_unit}
                    </span>
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
                                      ? {
                                          ...p,
                                          sweet: swt.title,
                                          price: swt.price,
                                        }
                                      : p
                                  )
                                );
                                // setUpdatedPrice(product.price + swt.price);
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

              {product.have_sticker_options && (
                <>
                  {" "}
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

                        <Select
                          onValueChange={(value) => setFrontPrintType(value)}
                          value={frontPrintType}
                        >
                          <SelectTrigger placeholder="Select Print Type">
                            {frontPrintType === "paper_cut"
                              ? "Paper Cut"
                              : frontPrintType === "laser_cut"
                              ? "Laser Cut"
                              : "Select Print Type"}
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Print Type</SelectLabel>
                              <SelectItem value="paper_cut">
                                Paper Cut (+₹10)
                              </SelectItem>
                              <SelectItem value="laser_cut">
                                Laser Cut (+₹25)
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </>
                    )}
                  </div>{" "}
                </>
              )}

              {/* ================= ADD TO CART ================= */}

              {/* <div className="flex gap-4 flex-col sm:flex-row mt-4">
              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => handleQuantityChange(-1)} // Decrease quantity
                  className="px-4 py-3 hover:bg-muted"
                  disabled={quantity <= 1} // Disable if quantity is 1
                >
                  <Minus className="h-5 w-5" />
                </button>

                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-16 text-center border-l border-r py-3 bg-background"
                />

                <button
                  onClick={() => handleQuantityChange(1)} // Increase quantity
                  className="px-4 py-3 hover:bg-muted"
                  disabled={quantity >= product.stock} // Disable if quantity exceeds stock
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>

              <Button
                className="flex-1 bg-primary text-white hover:bg-primary/90 transition"
                onClick={handleAddToCart}
                disabled={quantity <= 0 || quantity > product.stock}
              >
                Add to Cart
              </Button>
            </div> */}

              <div className="space-y-4">
                {isAddedToCart ? (
                  <div className="flex gap-4 items-center">
                    {/* Quantity Counter */}
                    <div className="flex items-center border border-border rounded-lg">
                      {/* Decrease */}
                      <button
                        className="px-4 py-3 hover:bg-muted disabled:opacity-50"
                        disabled={isAddedToCart.quantity <= 1}
                        onClick={() =>
                          mutate({
                            id: isAddedToCart.id,
                            quantity: isAddedToCart.quantity - 1,
                            product_price: updatedPrice,
                          })
                        }
                      >
                        <Minus className="h-5 w-5" />
                      </button>

                      {/* Current Qty */}
                      <input
                        type="number"
                        value={isAddedToCart.quantity}
                        readOnly
                        className="w-16 text-center border-l border-r py-3 bg-background"
                      />

                      {/* Increase */}
                      <button
                        className="px-4 py-3 hover:bg-muted disabled:opacity-50"
                        disabled={isAddedToCart.quantity >= product.stock}
                        onClick={() =>
                          mutate({
                            id: isAddedToCart.id,
                            quantity: isAddedToCart.quantity + 1,
                            product_price: updatedPrice,
                          })
                        }
                      >
                        <Plus className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Checkout Button */}
                    <Link
                      className="py-3 px-3 uppercase bg-transparent border border-primary text-primary leading-normal text-center text-md font-semibold tracking-[0.32px] transition-all duration-500 ease-[cubic-bezier(0,.97,.43,1)] hover:border-primary hover:text-white hover:bg-primary"
                      href="/checkout"
                    >
                      Checkout
                    </Link>
                  </div>
                ) : (
                  <AddToCartButtonProduct
                    product={{ ...product, product_price: updatedPrice }}
                    sections={selectedSections}
                    bag_print={bagPrint ? { text: bagPrintText || null } : null}
                    print_sticker_on_box={
                      frontPrint
                        ? {
                            text: frontPrintText || null,
                            print_type: frontPrintType,
                          }
                        : null
                    }
                  />
                )}
              </div>

              {/* Delivery Info */}
            </div>
          </div>
        </div>
      </main>
      <ProductActionBar product={product} price={updatedPrice} />
      <Image
        src="/img/product-mid.png"
        alt="banner"
        width={2000}
        height={2000}
        className="w-full   object-contain h-auto rounded-t-lg"
      ></Image>
      <RelatedProducts
        categoryId={product.category_id}
        currentProductId={product.id}
      />
    </>
  );
}
