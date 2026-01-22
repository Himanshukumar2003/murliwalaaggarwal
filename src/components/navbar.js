"use client";

import { Search, ShoppingCart, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useAuth, handleLogout } from "@/providers/auth-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/lib/features/slice";
import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "@/services/cart-services";
import { useMemo, useState } from "react";

export default function Header() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const { data: cartData } = useQuery({
    queryKey: ["cart", isCartOpen],
    queryFn: async () => {
      const { data } = await getCartItems();
      return data;
    },
    enabled: !!user,
  });

  const totalCartItems = useMemo(
    () => cartData?.reduce((sum, item) => sum + item.quantity, 0) ?? 0,
    [cartData]
  );

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="w-full     bg-primary py-1">
        <p className="text-center text-white font-semibold text-sm md:text-base">
          PAN India Delivery – 4 to 6 days
        </p>
      </div>
      <header className="     sticky top-0 left-0 right-0 z-[999] bg-[#FFFBEB] backdrop-blur-2xl border-b  saturate-180">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LEFT MENU (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-[16px]  font-semibold hover:text-neutral-600"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[16px]  font-semibold hover:text-neutral-600"
            >
              About
            </Link>
            <Link
              href="/product"
              className="text-[16px]  font-semibold hover:text-neutral-600"
            >
              All Products
            </Link>

            <Link
              href="/product?category=4"
              className="text-[16px]  font-semibold hover:text-neutral-600"
            >
              Wedding Bhaji
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}

          {/* CENTER LOGO */}
          <div className=" h-[40px] flex justify-center   items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="LOGO"
                width={500}
                height={100}
                className="w-[160px] h-auto"
              />
            </Link>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-6 ">
            <Link
              href="/product?category=5"
              className="text-[16px]  font-semibold hover:text-neutral-600 hidden lg:block"
            >
              Festive Collection
            </Link>
            <Link
              href="/contact"
              className="text-[16px]  font-semibold hover:text-neutral-600 hidden lg:block"
            >
              Contact
            </Link>

            <button
              onClick={() => dispatch(toggleCart())}
              className="p-2 hover:bg-neutral-100 rounded-lg transition relative hidden lg:block"
            >
              <ShoppingCart size={20} />
              {totalCartItems > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
            {user ? (
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <div
                    className="relative flex items-center justify-center w-11 h-11 rounded-full 
bg-gradient-to-br from-primary/10 to-secondary/10 
border border-primary/20 
hover:scale-105 transition-all duration-300"
                  >
                    <User size={20} className="text-primary" />
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-40  z-[999999]" align="end">
                  <div className="py-2 pl-2">
                    <Link href="/dashboard">Dashboard</Link>
                  </div>
                  <DropdownMenuSeparator />
                  <button
                    onClick={handleLogout}
                    className="flex items-center  gap-1 text-red-500 py-2 pl-2"
                  >
                    Logout
                  </button>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                href="/login"
                className="btn !mt-0  gap-2  items-center hidden lg:flex"
              >
                Login
              </Link>
            )}

            <button
              className="lg:hidden  p-2 hover:bg-neutral-100 rounded-lg transition"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 bg-white/80 backdrop-blur-lg ${
            openMenu ? "max-h-[520px] py-4" : "max-h-0 py-0"
          }`}
        >
          <div className="flex flex-col  items-center gap-6 pb-4">
            <Link
              href="/"
              onClick={() => setOpenMenu(false)}
              className="text-lg font-semibold"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setOpenMenu(false)}
              className="text-lg font-semibold"
            >
              About
            </Link>

            <Link
              href="/product"
              onClick={() => setOpenMenu(false)}
              className="text-lg font-semibold"
            >
              All Products
            </Link>

            <Link
              href="/product?category=4"
              onClick={() => setOpenMenu(false)}
              className="text-lg font-semibold"
            >
              Wedding Bhaji
            </Link>

            <Link
              href="/product?category=5"
              onClick={() => setOpenMenu(false)}
              className="text-lg font-semibold"
            >
              Festive Collection
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpenMenu(false)}
              className="text-lg font-semibold"
            >
              Contact
            </Link>

            {/* Mobile Login */}
            {!user && (
              <Link
                href="/login"
                onClick={() => setOpenMenu(false)}
                className="btn flex gap-2 items-center"
              >
                Login
              </Link>
            )}

            {/* Mobile Cart + Search */}
            <div className="flex items-center gap-4 pt-2">
              <button className="p-2 hover:bg-neutral-100 rounded-lg transition">
                <Search size={22} />
              </button>

              <button
                onClick={() => {
                  dispatch(toggleCart());
                  setOpenMenu(false);
                }}
                className="p-2 hover:bg-neutral-100 rounded-lg transition relative"
              >
                <ShoppingCart size={22} />
                {totalCartItems > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
