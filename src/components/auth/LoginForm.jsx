"use client";

import Link from "next/link";
import { Button, Card, Input } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { reddit } from "better-auth";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import Google from "./Google";

export default function LoginForm() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Login Successfull", {
        position: "top-center",
      });
      redirect("/");
    } else if (error) {
      toast.error(`${error.message}`, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] px-4">
      <div className="w-full max-w-md">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-[40px] font-bold text-[#2d2d2d] leading-tight">
            Welcome Back
          </h1>

          <p className="text-sm text-[#8a8a9a] mt-1">
            Resume your adventure with Wanderlust
          </p>
        </div>

        {/* Card */}
        <Card className="border border-[#ececec] rounded-md bg-white p-5 shadow-none">
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-[#222] mb-1.5 block">
                Email Address
              </label>

              <Input
                required
                name="email"
                type="email"
                placeholder="Enter your email"
                variant="bordered"
                radius="sm"
                className="bg-[#f5f5f5] w-full"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-[#222] mb-1.5 block">
                Password
              </label>

              <Input
                required
                name="password"
                type="password"
                placeholder="Create a password"
                variant="bordered"
                radius="sm"
                className="bg-[#f5f5f5] w-full"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-11 bg-[#19a9c3] text-white rounded-md hover:bg-[#1598b0]"
            >
              Login
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-[1px] bg-[#ececec]" />

            <span className="text-xs text-[#999]">Or Continue with</span>

            <div className="flex-1 h-[1px] bg-[#ececec]" />
          </div>

          {/* Google Button */}
          <Google/>

          {/* Footer */}
          <p className="text-center text-sm text-[#8a8a8a] pt-4">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-[#19a9c3] font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
