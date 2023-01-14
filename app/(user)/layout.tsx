import "../../styles/globals.css";
import Header from "../../components/Header.jsx";
// @ts-ignore
import Head from "../head.tsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth">
      <Head />

      <body className={'font-roboto'}>
        <Header />
        {children}
      </body>
    </html>
  );
}
