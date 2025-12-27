// app/calculator/layout.tsx
import { Banner } from "@/components/Banner";
import ScrollToTop from "@/components/ScrollToTop";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Save Data Calculator",
  description: "Track your progress and calculate Faint Memory points",
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Banner title="Save Data Calculator" subtitle="" />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">{children}</div>
      </main>
    </div>
  );
}
