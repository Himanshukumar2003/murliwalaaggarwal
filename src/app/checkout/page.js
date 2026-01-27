"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState, useEffect, useMemo, use } from "react";
import { useAuth } from "@/providers/auth-provider";
import { z } from "zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "@/services/order-services";
import { toast } from "sonner";
import { handleError } from "@/lib/handle-error-toast";
import Image from "next/image";
import { getLocalCart } from "@/components/cart-button";
import { addToCart, getCartItems } from "@/services/cart-services";
import { getAddresses } from "@/services/address-services";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Loader from "@/components/loader";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddressForm from "@/components/address-form";
import CheckoutLoginModal from "./_componets/checkout-login-modal";
import SignupForm from "@/components/form/signup-form";

const addressSchema = z.object({
  fullname: z.string().min(1, "fullname is required"),
  street: z.string().min(1, "Street is required"),
  house: z.string().min(1, "House number is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postal_code: z.string().min(6, "Postal code is required"),
  phone: z.string().min(10).optional(),
});

const createOrderSchema = z.object({
  shipping_address: addressSchema,
});

export default function CheckoutPage() {
  const { user, refetch, setUser } = useAuth();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [form, setForm] = useState("login");

  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [localCartItems, setLocalCartItems] = useState([]);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const createMutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      toast.success("Order created successfully");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["cart-items"] });
      if (!user) {
        localStorage.removeItem("cart");
      }
      router.push("/dashboard");
    },
    onError: (error) => {
      handleError(error);
    },
  });

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addToCart,
    onSuccess: (data) => {
      // queryClient.invalidateQueries(["cart"]);
      // queryClient.invalidateQueries(["cart-items"]);
      // toast.success("Added to cart!");
    },
    onError: (err, variables) => {
      handleError(err);
    },
  });

  useEffect(() => {
    if (!user) {
      const storedCart = getLocalCart();
      setLocalCartItems(storedCart);
    }
  }, [user]);

  const handleLoginSuccess = async (user) => {
    try {
      if (form === "signup") {
        setForm("login");
        return;
      }
      // Clear local cart items from display
      // setLocalCartItems([]);
      setUser(user);

      const storedCart = getLocalCart();
      storedCart.forEach((cart) => {
        mutate({
          product_id: cart.id,
          product_price: cart.product_price,
          sections: cart.sections,
          slug: cart.slug,
        });
      });

      // Invalidate queries to force refetch
      await queryClient.invalidateQueries({ queryKey: ["cart-items"] });
      await queryClient.invalidateQueries({ queryKey: ["cart"] });
      await queryClient.invalidateQueries({ queryKey: ["addresses"] });

      // createMutation.mutate()

      setLoginModalOpen(false);
    } catch (err) {
      console.log("Error refetching after login:", err);
    }
  };

  const { register, handleSubmit, formState, setValue } = useForm({
    mode: "onChange",
    resolver: zodResolver(
      createOrderSchema.pick({ shipping_address: user ? true : false })
    ),
    defaultValues: {
      shipping_address: {
        fullname: "",
        street: "",
        city: "",
        state: "",
        postal_code: "",
        phone: "",
        house: "",
      },
    },
  });

  const { isValid, errors } = formState;

  const { data: cartItems, isLoading: isCartLoading } = useQuery({
    queryKey: ["cart-items"],
    queryFn: async () => {
      const { data } = await getCartItems();
      return data;
    },
    enabled: !!user,
  });

  const { data: addressData, isLoading: isAddressLoading } = useQuery({
    queryKey: ["addresses"],
    queryFn: getAddresses,
    enabled: !!user,
  });

  const displayCartItems = user ? cartItems : localCartItems;

  const subtotal = useMemo(() => {
    if (!displayCartItems) return 0;
    return displayCartItems.reduce((sum, item) => {
      const price = Number(String(item.product_price).replace(/[^\d.-]/g, ""));
      return sum + price * item.quantity;
    }, 0);
  }, [displayCartItems]);

  const onSubmit = (data) => {
    if (!user) {
      setLoginModalOpen(true);
      return;
    }

    if (!cartItems || cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    const orderItems = cartItems.map((item) => ({
      item_id: item.item_id,
      quantity: item.quantity,
      product_price: item.product_price,
    }));

    const order = {
      ...data,
      order_items: orderItems,
    };

    const toastId = toast.loading("Placing your order...");

    createMutation.mutate(order, {
      onSuccess: () => {
        toast.dismiss(toastId);
        toast.success("Order placed successfully");
      },
      onError: (error) => {
        toast.dismiss(toastId);
        toast.error(error?.message || "Failed to place order");
      },
    });
  };

  if (isCartLoading && user) {
    return <Loader />;
  }

  const renderAddressSection = () => {
    if (!user) {
      return (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold mb-2">Delivery Address</h3>
          <div className="space-y-3">
            <div>
              <Label htmlFor="fullname">Full Name</Label>
              <input
                {...register("shipping_address.fullname")}
                id="fullname"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your full name"
              />
              {errors?.shipping_address?.fullname && (
                <span className="text-sm text-red-500">
                  {errors.shipping_address.fullname.message}
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="street">Street</Label>
                <input
                  {...register("shipping_address.street")}
                  id="street"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Street address"
                />
                {errors?.shipping_address?.street && (
                  <span className="text-sm text-red-500">
                    {errors.shipping_address.street.message}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="house">House Number</Label>
                <input
                  {...register("shipping_address.house")}
                  id="house"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="House #"
                />
                {errors?.shipping_address?.house && (
                  <span className="text-sm text-red-500">
                    {errors.shipping_address.house.message}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="city">City</Label>
                <input
                  {...register("shipping_address.city")}
                  id="city"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="City"
                />
                {errors?.shipping_address?.city && (
                  <span className="text-sm text-red-500">
                    {errors.shipping_address.city.message}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <input
                  {...register("shipping_address.state")}
                  id="state"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="State"
                />
                {errors?.shipping_address?.state && (
                  <span className="text-sm text-red-500">
                    {errors.shipping_address.state.message}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="postal_code">Postal Code</Label>
                <input
                  {...register("shipping_address.postal_code")}
                  id="postal_code"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Postal code"
                />
                {errors?.shipping_address?.postal_code && (
                  <span className="text-sm text-red-500">
                    {errors.shipping_address.postal_code.message}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <input
                  {...register("shipping_address.phone")}
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Phone number"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <h3 className="font-semibold mb-4">Select Delivery Address</h3>
        {isAddressLoading && <Loader />}
        {addressData && addressData.addresses && (
          <div className="space-y-4">
            {addressData.addresses.map((addr) => {
              const isSelected = selectedAddressId === addr.id;
              const borderClass = isSelected
                ? "border-blue-500 bg-green-50 shadow-md"
                : "border-gray-200 hover:border-gray-400";

              return (
                <label
                  key={addr.id}
                  className={
                    borderClass +
                    " flex items-center p-4 border rounded-lg cursor-pointer transition-all"
                  }
                >
                  <input
                    type="radio"
                    value={addr.id}
                    className="mt-1 mr-3 cursor-pointer accent-blue-500"
                    onChange={() => {
                      setSelectedAddressId(addr.id);
                      setValue("shipping_address", addr.address);
                    }}
                  />
                  <div className="text-gray-800">
                    <p className="font-semibold">{addr.address.fullname}</p>
                    <p className="text-sm">
                      {addr.address.street}, {addr.address.city},{" "}
                      {addr.address.state} - {addr.address.postal_code}
                    </p>
                  </div>
                </label>
              );
            })}
          </div>
        )}
        <div className="mt-4">
          <Dialog>
            <DialogTrigger className=" border-2 border-primary p-3 bg-transparent   rounded-lg">
              Add New Address
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="sr-only">Add New Address</DialogTitle>
              </DialogHeader>
              <AddressForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    );
  };

  const renderOrderSummary = () => {
    if (!displayCartItems || displayCartItems.length === 0) {
      return (
        <p className="text-center text-gray-500 text-lg py-4">
          Your cart is empty.
        </p>
      );
    }

    return displayCartItems.map((item) => {
      const price = Number(String(item.price).replace(/[^\d.-]/g, ""));
      const itemTotal = item.product_price * item.quantity;

      return (
        <div
          key={item.id}
          className="flex items-center gap-4 border-b pb-4 last:border-b-0 last:pb-0"
        >
          <div className="relative w-20 h-20 flex-shrink-0 border rounded-lg bg-gray-100">
            <Image
              src={
                process.env.NEXT_PUBLIC_FILE_BASE
                  ? process.env.NEXT_PUBLIC_FILE_BASE +
                    (item.pictures?.[0] || "")
                  : ""
              }
              alt={item.title || "product"}
              fill
              className="object-contain p-1"
            />
            <span className="absolute z-10 -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-md">
              {item.quantity}
            </span>
          </div>
          <div className="flex-1">
            <p className="text-base font-medium text-gray-800">{item.title}</p>
            <p className="text-sm text-gray-500">Price: {item.product_price}</p>
            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
          </div>
          <p className="text-base font-semibold text-gray-800">
            {"₹" + itemTotal.toFixed(2)}
          </p>
        </div>
      );
    });
  };

  return (
    <>
      <CheckoutLoginModal
        open={loginModalOpen}
        onOpenChange={setLoginModalOpen}
        onLoginSuccess={handleLoginSuccess}
        form={form}
        setForm={setForm}
      />

      <div className="py-20 bg-blue-50">
        <form onSubmit={handleSubmit(onSubmit)} className="pt-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
                <div className="bg-white rounded-xl shadow-2xl p-6">
                  {user && <>{renderAddressSection()}</>}

                  <div className="mt-6">
                    <Button type="submit" disabled={!isValid && !user}>
                      Place Order
                    </Button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 bg-white p-8 rounded-xl shadow-lg lg:sticky top-12 h-fit order-1 lg:order-2">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Order Summary
                </h2>
                <div className="space-y-6 mb-8">{renderOrderSummary()}</div>
                <div className="border-t border-gray-200 pt-6 space-y-3 text-base">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal:</span>
                    <span>{"₹" + subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold border-t border-gray-200 pt-4 mt-4 text-xl text-gray-900">
                    <span>Total:</span>
                    <span>{"₹" + subtotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
