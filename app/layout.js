import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";
import ChatbotScript from "./Components/ChatbotScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"], 
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "OpsZ | Intelligent IT Operations Automation Platform",
  description:
    "Seamlessly unify IT tools and automate operations across hybrid environments. Discover OpsZ—a force multiplier for modern IT teams",
  keywords: "IT operations automation, intelligent IT, cloud orchestration",
  authors: [{ name: "OpsZ" }],
  creator: "OpsZ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body
        className={montserrat.className}
        id="top"
      >
        <LayoutWrapper>{children}</LayoutWrapper>
        <ChatbotScript /> 
      </body>
    </html>
  );
}
