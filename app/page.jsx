"use client";
import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("./homepage/page"), { ssr: false });

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
