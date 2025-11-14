import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contra Costa Plumbing Pros | 24/7 Emergency Plumber",
  description:
    "Local, licensed plumbers providing 24/7 emergency plumbing services in Contra Costa County with fast arrival and up-front pricing."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
