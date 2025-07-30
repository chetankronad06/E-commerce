import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import localfont from "next/font/local";
import { Toaster } from "react-hot-toast";

const raleway = localfont({
  variable: "--font-raleway",
  src:"../fonts/raleway-font.woff2",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-commerce",
  description: "E-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
        <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#000000",
                color: "#ffffff",
              },
            }}
          />
      </body>
    </html>
    </ClerkProvider>
  );
}
