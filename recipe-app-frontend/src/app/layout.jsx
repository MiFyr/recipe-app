import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import "@/styles/globals.css";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Middagstipset",
  description: "Din app för receptförslag",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body className={`${inter.className} ${styles.body}`}>
        <Header />

        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
          <p>&copy; 2024</p>
        </footer>
      </body>
    </html>
  );
}
