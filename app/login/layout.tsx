// app/guides/layout.tsx
import { Banner } from "@/components/Banner";
import ScrollToTop from "@/components/ScrollToTop";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ScrollToTop />

      <Banner title="Login">
        <div className="-mt-22 sm:-mt-20 md:-mt-18 lg:-mt-16 max-w-4xl mx-auto px-4"></div>
      </Banner>

      <main className="flex relative z-10 -mt-64 lg:-mt-96">
        <div className="container mx-auto px-4 sm:px-6">{children}</div>
      </main>
    </div>
  );
}
