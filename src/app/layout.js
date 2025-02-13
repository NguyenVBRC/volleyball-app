import NavigationBar from "@/components/NavigationBar";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rock Volleyball Leagues & Tournaments",
  description: "Volleyball tournaments and leagues hosted at the Mosh Performance Center in Franklin, WI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavigationBar /> 
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
