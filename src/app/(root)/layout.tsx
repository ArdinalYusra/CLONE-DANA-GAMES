"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { usePathname } from "next/navigation";

const disableNavbar = ["/login", "/404"];
const disableFooter = ["/login", "/404"];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
      {!disableFooter.includes(pathname) && <Footer />}
    </>
  );
}
