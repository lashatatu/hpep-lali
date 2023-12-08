"use client"
import "../../styles/globals.css";
import Header from "../../components/Header.jsx";
// @ts-ignore
import Head from "../head.tsx";
import Footer from "../../components/Footer";
import { usePathname } from 'next/navigation';

//12
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showHeader = pathname === "/" ? false : true;

  return (
    <html className="scroll-smooth">
      <Head />

      <body className={"font-roboto bg-slate-200"}>
        {showHeader && <Header />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
