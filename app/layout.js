import localFont from "next/font/local";
import "./globals.css";
import { Footer, NavBar } from "@/components";

export const metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      > 
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
