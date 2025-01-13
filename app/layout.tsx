import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CartProvider } from "./context/useCart";
import "./globals.css";
import { CartButton } from "./ui/cart-button";
import { Footer } from "./ui/footer";
import { Navbar } from "./ui/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KauGifts | Inicio",
  description: "La mejor floristeria de maracaibo, el mejor sitio para tus regalos especiales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased overflow-x-hidden bg-slate-50 from-[#754962] via-[#a86e89] to-[#d494b5]`}
      >
        <CartProvider>
          <Navbar />
          <div id="modal-root"></div>
          <main className="py-16">{children}</main>
          <CartButton />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
