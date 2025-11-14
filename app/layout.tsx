import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contra Costa Plumbing Reserve | Discreet 24/7 Plumbing Service",
  description:
    "A boutique plumbing service for Contra Costa County delivering discreet, high standard residential and light commercial plumbing with 24/7 availability."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-luxeNavy text-luxeIvory">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
