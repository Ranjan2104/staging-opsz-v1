import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
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
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistSans.variable} ${geistMono.variable}`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
        <script
          defer
          type="text/javascript"
          id="chatbot-initials-script"
          src="https://chat-bbl.noform.ai/script-chatbot.js"
          data-server-url="https://app.noform.ai"
          data-bot-id="67eab192038da2eaa2d2fea5"
        ></script>
      </body>
    </html>
  );
}
