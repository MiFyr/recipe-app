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
      <Link href={"/"} className={styles.card}>
        Start
      </Link>
      <Link href={"/recipes"} className={styles.card}>
        Recept
      </Link>

      {isLoggedIn ? <LoggedInLinks /> : <LoggedOutLinks />}
    </nav>
  );
}

function LoggedInLinks() {
  return (
    <>
      <Link href={"/recipes/myrecipes"} className={styles.card}>
        Mina recept
      </Link>

      <Link href={"/auth/logout"} className={styles.card}>
        Logout
      </Link>
    </>
  );
}

function LoggedOutLinks() {
  return (
    <>
      <Link href={"/auth/login"} className={styles.card}>
        Login
      </Link>
    </>
  );
}
