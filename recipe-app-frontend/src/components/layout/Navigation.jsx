"use client";

import Link from "next/link";
import styles from "./Navigation.module.css";
import { useEffect, useState } from "react";
import { checkIfLoggedIn } from "@/utils/auth";

export default function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = checkIfLoggedIn();
    setIsLoggedIn(isLoggedIn);
  }, []);

  return (
    <nav className={styles.nav}>
      <Link href={"/"}>Start</Link>
      <Link href={"/recipes"}>Recept</Link>

      {isLoggedIn ? <LoggedInLinks /> : <LoggedOutLinks />}
    </nav>
  );
}

function LoggedInLinks() {
  return (
    <>
      <Link href={"/auth/logout"}>Logout</Link>
    </>
  );
}

function LoggedOutLinks() {
  return (
    <>
      <Link href={"/auth/login"}>Login</Link>
    </>
  );
}
