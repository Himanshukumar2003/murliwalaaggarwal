"use client";

import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchCartItems, toggleCart } from "@/lib/features/slice";
import { addToCart } from "@/services/cart-services";
import { handleError } from "@/lib/handle-error-toast";
import { ShoppingCart, Loader2 } from "lucide-react";
import { useAuth } from "@/providers/auth-provider";
import { useRouter } from "next/navigation";

export const AddToCartButtonProduct = ({
  product,
  sections,
  bag_print,
  print_sticker_on_box,
  front_print,
}) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: addToCart,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["cart"]);
      queryClient.invalidateQueries(["cart-items"]);
      dispatch(toggleCart());
      console.log("Added to cart:", data);
    },
    onError: (err) => {
      handleError(err);
    },
  });

  const handleAddToCart = () => {
    if (!user) {
      return router.push("/login");
    }

    mutate({
      product_id: product.id,
      sections,
      bag_print,
      print_sticker_on_box,
      front_print,
      slug: product.slug,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isPending}
      className="relative flex items-center gap-2 px-4 min-h-[50px] rounded-none uppercase bg-transparent border border-primary text-primary font-semibold text-md tracking-[0.32px] transition-all duration-500 ease-[cubic-bezier(0,.97,.43,1)] hover:bg-primary hover:text-white"
    >
      {isPending ? <Loader2 className="animate-spin" /> : "Add to cart"}
    </button>
  );
};
