"use client";

import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>Start</Link>
      <Link href={"/auth/login"}>Logga in</Link>
    </nav>
  );
}
