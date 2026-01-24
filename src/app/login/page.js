"use client";
import Link from "next/link";
import { Store, Package, Gift, Heart } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import LoginForm from "@/components/form/login-form";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-100vh bg-green-50 overflow-hidden">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-xl space-y-6">
          <Link href="/" className="flex justify-center items-center">
            <Image src="/logo.png" width={200} height={200} alt="logo" />
          </Link>

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground">
              Sign in to continue your learning journey
            </p>
          </div>

          <Card className="py-5">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-semibold">Sign In</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm callback={() => router.push("/")} />
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {"Don't have an account? "}
              <Link
                href="/signup"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Educational Content */}
      <div className="hidden min-h-[100vh] flex-1 bg-gradient-to-r from-[#9D2B2C] to-[#c94b4b] education-pattern lg:flex items-center justify-center p-8 text-white">
        <div className="max-w-lg space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm">
              <Store className="w-8 h-8" />
            </div>

            <h2 className="text-3xl font-bold text-balance">
              Shuddh Swad, Paramparik Mithas
            </h2>

            <p className="text-red-100 text-lg text-balance">
              Murliwala brings you premium quality namkeen, sweets & festive
              gift boxes made with traditional recipes and pure ingredients.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Premium Namkeen Range</h3>
                <p className="text-red-100">
                  Freshly prepared namkeen with authentic taste, perfect for
                  every occasion.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Gift className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Festive Gift Boxes</h3>
                <p className="text-red-100">
                  Beautifully packed sweet & namkeen boxes ideal for weddings,
                  festivals & celebrations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Pure & Hygienic</h3>
                <p className="text-red-100">
                  Made using high-quality ingredients with strict hygiene and
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
