// app/damage/layout.tsx
import ScrollToTop from "@/components/ScrollToTop";
import { Banner } from "@/components/Banner";

export default function DamageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <main className="flex-1 relative">
        {" "}
        <Banner title="CZN Damage Calculator" />
        <div className="container mx-auto px-4 py-8 relative z-10 -mt-12 md:-mt-72">
          <div className="pt-8 bg-transparent">{children}</div>
        </div>
      </main>
    </div>
  );
}
