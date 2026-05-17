"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";

const LogOut = () => {
  const handleLogOut = async () => {
    await authClient.signOut();
    redirect('/')
  };
  return (
    <Button onClick={handleLogOut} variant="danger-soft">
      Logout
    </Button>
  );
};

export default LogOut;
