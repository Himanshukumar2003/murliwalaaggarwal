"use client";

import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleCart } from "@/lib/features/slice";
import { addToCart } from "@/services/cart-services";
import { handleError } from "@/lib/handle-error-toast";
import { Loader2 } from "lucide-react";
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

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addToCart,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["cart"]);
      queryClient.invalidateQueries(["cart-items"]);
      dispatch(toggleCart());
    },
    onError: (err, variables) => {
      handleError(err);
    },
  });

  const handleAddToCart = () => {
    if (!user) return router.push("/login");

    const cartData = {
      product_id: product.id,
      sections,
      ...(bag_print && { bag_print }),
      ...(print_sticker_on_box && { print_sticker_on_box }),
      ...(front_print && { front_print }),
      slug: product.slug,
    };

    mutate(cartData);
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
