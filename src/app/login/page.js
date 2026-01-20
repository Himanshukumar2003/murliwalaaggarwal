"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Store, Package, Gift, Heart } from "lucide-react";

import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, EyeOff, BookOpen, Users, Award, Lightbulb } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // API request to handle login
  const loginReq = async (data) => {
    setIsLoading(true);

    try {
      const resp = await axios.post("/api/auth/login", {
        body: JSON.stringify({ ...data, role: "user" }),
      });
      router.push("/");
      toast.success("Login successful!");

      return resp.data;
    } catch (err) {
      setError("Invalid credentials");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data) => {
    setError("");
    await loginReq(data);
  };

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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    {...register("username", {
                      required: "username is required",
                    })}
                    className="h-11"
                  />
                  {errors.username && (
                    <p className="text-sm text-red-600 font-medium">
                      {errors.username.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  {/* <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-green-600 hover:text-green-500"
                    >
                      Forgot password?
                    </Link>
                  </div> */}
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className="h-11 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                  {errors.password && (
                    <p className="text-sm text-red-600 font-medium">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {error && (
                  <p className="text-sm text-red-600 font-medium">{error}</p>
                )}

                <button
                  type="submit"
                  className="btn w-full"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </button>
              </form>
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
