import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_Navbar/Page";
import SplashScreen from "../components/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohamed Bahaa",
  description: "Mohamed Bahaa - UI/UX Designer & Front-End Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark bg-[#020618] overflow-x-hidden max-w-full">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased pb-24 md:pb-0 bg-[#020618] text-white overflow-x-hidden max-w-full`}
      >
        <SplashScreen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
