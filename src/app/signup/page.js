"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { ChefHat, ShoppingBag, Gift, ShieldCheck } from "lucide-react";
import SignupForm from "@/components/form/signup-form";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  return (
    <div className="flex bg-green-50 min-h-screen overflow-hidden justify-evenly pt-16">
      {/* Left - Signup Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-2xl space-y-6">
          <Link href="/" className="flex justify-center items-center">
            <Image src="/logo.png" width={200} height={200} alt="logo" />
          </Link>

          <Card className="shadow-0 bg-transparent">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-semibold">Sign Up</CardTitle>
              <CardDescription>
                Create your account to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SignupForm callback={() => router.push("/")}></SignupForm>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Educational Content */}
      <div className="hidden flex-1 bg-gradient-to-r from-[#9D2B2C] to-[#c94b4b] education-pattern lg:flex items-center justify-center p-8 text-white">
        <div className="max-w-lg space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm">
              <ChefHat className="w-8 h-8" />
            </div>

            <h2 className="text-3xl font-bold text-balance">
              Swad Jo Yaadein Bana De
            </h2>

            <p className="text-red-100 text-lg text-balance">
              Murliwala offers a wide range of traditional namkeen, sweets and
              premium gift packs crafted with love, purity and authentic Indian
              taste.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Freshly Prepared Products
                </h3>
                <p className="text-red-100">
                  Daily prepared namkeen & sweets ensuring freshness, quality
                  and unmatched taste.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Perfect for Every Occasion
                </h3>
                <p className="text-red-100">
                  Ideal gift boxes for weddings, festivals, corporate gifting
                  and family celebrations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Hygiene & Quality Assured
                </h3>
                <p className="text-red-100">
                  Prepared with premium ingredients following strict hygiene and
                  quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
