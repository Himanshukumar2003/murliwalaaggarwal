"use client";

import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "@/services/cart-services";
import { handleError } from "@/lib/handle-error-toast";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/providers/auth-provider";
import { toast } from "sonner";
import {
  addItem,
  setCartItems,
  toggleCart,
  incrementQuantity,
} from "@/lib/features/slice";

// ====== LOCAL STORAGE HELPERS ======
export const getLocalCart = () => {
  if (typeof window === "undefined") return [];
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const setLocalCart = (items) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("cart", JSON.stringify(items));
};

// Add or update item in localStorage
export const addToLocalCart = (product, quantity = 1) => {
  const cart = getLocalCart();
  const existingItem = cart.find(
    (item) => item.id === product.id && item.slug === product.slug
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  setLocalCart(cart);
  return cart;
};

// ====== COMPONENT ======
export const AddToCartButtonProduct = ({
  product,
  sections,
  bag_print,
  print_sticker_on_box,
  front_print,
  quantity = 1, // default quantity = 1
}) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
      queryClient.invalidateQueries(["cart-items"]);
      dispatch(toggleCart());
      toast.success("Added to cart!");
    },
    onError: (err) => {
      handleError(err);
    },
  });

  const handleAddToCart = () => {
    const cartData = {
      product_id: product.id,
      product_price: product.product_price,
      sections,
      ...(bag_print && { bag_print }),
      ...(print_sticker_on_box && { print_sticker_on_box }),
      ...(front_print && { front_print }),
      quantity,
      slug: product.slug,
    };

    if (user) {
      // Logged-in user - use API
      mutate(cartData);
    } else {
      // Guest - localStorage + Redux
      const localProduct = {
        id: product.id,
        product_price: product.product_price,
        title: product.title,
        price: product.price,
        pictures: product.pictures,
        slug: product.slug,
        sections,
        ...(bag_print && { bag_print }),
        ...(print_sticker_on_box && { print_sticker_on_box }),
        ...(front_print && { front_print }),
      };

      const updatedCart = addToLocalCart(localProduct, quantity);

      // Update Redux store with local cart
      dispatch(setCartItems(updatedCart));

      dispatch(toggleCart());
      toast.success("Added to cart!");
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isPending}
      className="relative rounded-none items-center !flex gap-2 px-4 min-h-[50px] uppercase bg-transparent border border-primary text-primary leading-normal inline-block text-center text-md font-semibold tracking-[0.32px] transition-all duration-500 ease-[cubic-bezier(0,.97,.43,1)] hover:border-primary hover:text-white hover:bg-primary"
    >
      {isPending ? <Loader2 className="animate-spin" /> : "Add to cart"}
    </button>
  );
};
