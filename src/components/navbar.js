"use client";

import { Search, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useAuth, handleLogout } from "@/providers/auth-provider";
import {
  ChevronDown,
  X,
  LogIn,
  ChevronDownIcon,
  MoreHorizontalIcon,
} from "lucide-react";
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
import { useMemo } from "react";
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

  return (
    <header className=" fixed top-0 left-0 right-0 z-99  mx-automt-3 bg-white/50  border border-white  mb-0 ml-0 mr-0 pt-0 pb-0 pl-3.5 pr-3.5 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm  font-semibold text-[16px] text-neutral-900 hover:text-neutral-600 transition"
          >
            HOME
          </Link>
          <Link
            href="/product"
            className="text-sm font-semibold text-[16px] text-neutral-900 hover:text-neutral-600 transition"
          >
            MENU
          </Link>
          <a
            href="#"
            className="text-sm font-semibold text-[16px] text-neutral-900 hover:text-neutral-600 transition"
          >
            SHOP
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-[16px] text-neutral-900 hover:text-neutral-600 transition"
          >
            PAGES
          </a>
        </nav>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="text-center">
            <Image
              alt="LOGO"
              width={500}
              height={100}
              src="/logo.png"
              className="w-[300px] h-auto"
            ></Image>
          </div>
        </div>

        {/* Right Actions */}

        <div className="flex items-center gap-6">
          {user && (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Image
                  src="/user-profile.png"
                  alt="profile"
                  width={50}
                  height={50}
                ></Image>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 z-[999]" align="end">
                <div className="py-2 pl-2">
                  <Link href="/dashboard">Dashboard</Link>
                </div>
                <DropdownMenuSeparator />

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1  bg-transparent  text-red-500 border-0 py-2 pl-2 "
                >
                  Logout
                </button>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          {!user && (
            <>
              <Link href="/login" className="btn flex gap-2 items-center">
                Login
              </Link>
            </>
          )}

          <Button
            variant="outline"
            className="relative    rounded-none   min-h-[50px] uppercase bg-transparent border border-primary text-primary  leading-normal inline-block text-center text-md font-semibold tracking-[0.32px] transition-all duration-500 ease-[cubic-bezier(0,.97,.43,1)] hover:border-primary hover:text-white hover:bg-primary"
          >
            BOOK A TABLE
          </Button>
          <button className="p-2 hover:bg-neutral-100 rounded-lg transition">
            <Search size={20} className="text-neutral-900" />
          </button>
          <button
            onClick={() => dispatch(toggleCart())}
            className="p-2 hover:bg-neutral-100 rounded-lg transition relative"
          >
            <ShoppingCart size={20} className="text-neutral-900" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
