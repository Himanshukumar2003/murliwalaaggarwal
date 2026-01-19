"use client";

import { Search, ShoppingCart, Menu, X } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-[#ffffffcc] backdrop-blur-2xl border-b  saturate-180">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT MENU (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-[16px] uppercase font-semibold hover:text-neutral-600"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="text-[16px] uppercase font-semibold hover:text-neutral-600"
          >
            About
          </Link>
          <Link
            href="/product"
            className="text-[16px] uppercase font-semibold hover:text-neutral-600"
          >
            Our Sweets
          </Link>

          <Link
            href="/product?categories=4"
            className="text-[16px] uppercase font-semibold hover:text-neutral-600"
          >
            Wedding Bhaji
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden uppercase p-2 hover:bg-neutral-100 rounded-lg transition"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="/logo.png"
            alt="LOGO"
            width={500}
            height={100}
            className="w-[160px] h-auto"
          />
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-6">
          <Link
            href="/product?categories=5"
            className="text-[16px] uppercase font-semibold hover:text-neutral-600"
          >
            Festive Collection
          </Link>
          <Link
            href="/contact"
            className="text-[16px] uppercase font-semibold hover:text-neutral-600"
          >
            Contact
          </Link>

          <button
            onClick={() => dispatch(toggleCart())}
            className="p-2 hover:bg-neutral-100 rounded-lg transition relative hidden md:block"
          >
            <ShoppingCart size={20} />
            {totalCartItems > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>
          {user ? (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Image
                  src="/user-profile.png"
                  alt="profile"
                  width={45}
                  height={45}
                  className="cursor-pointer"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-40 uppercase z-[999]"
                align="end"
              >
                <div className="py-2 pl-2">
                  <Link href="/dashboard">Dashboard</Link>
                </div>
                <DropdownMenuSeparator />
                <button
                  onClick={handleLogout}
                  className="flex items-center uppercase gap-1 text-red-500 py-2 pl-2"
                >
                  Logout
                </button>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              href="/login"
              className="btn !mt-0 flex gap-2 uppercase items-center hidden md:flex"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/80 backdrop-blur-lg ${
          openMenu ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col uppercase items-center gap-6 pb-4">
          <Link
            href="/"
            onClick={() => setOpenMenu(false)}
            className="text-lg font-semibold"
          >
            HOME
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
            Our Sweets
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
          <div className="flex items-center gap-4">
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
  );
}
