"use client";

import { logout } from "@/utils/auth";
import { useEffect } from "react";

export default function LogoutPage() {
  useEffect(() => {
    logout();
    location.href = "/";
  }, []);

  return null;
}
