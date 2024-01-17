import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from "./components/main/StarBackground";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JhonyDev",
  description: "Desenvolvedor Front-end Brusque-SC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} overflow-x-hidden overflow-y-scroll bg-[#030014]`}
      >
        <Navbar />
        <StarCanvas />
        {children}
        <Footer />
      </body>
    </html>
  );
}
