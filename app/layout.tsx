import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-commerce app",
  description: "Task 1 for SMTM Capital - E-commerce app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='relative ' suppressHydrationWarning>
        <Navbar />
        <div className='min-h-[100vh]'>{children}</div>

        <Footer />
      </body>
    </html>
  );
}
