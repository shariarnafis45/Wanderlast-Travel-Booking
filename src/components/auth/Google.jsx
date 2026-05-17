"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Google = () => {
  const handleGoogleSignUp = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <Button
      onClick={handleGoogleSignUp}
      variant="bordered"
      className="w-full h-11 border border-[#ececec] bg-white text-[#444]"
    >
      <FcGoogle className="text-lg" />
      Sign Up With Google
    </Button>
  );
};

export default Google;
