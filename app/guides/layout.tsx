// app/guides/layout.tsx
import { Banner } from "@/components/Banner";
import ScrollToTop from "@/components/ScrollToTop";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Character Guides",
  description:
    "Find detailed Epiphany guides and Save Data for Chaos Zero Nightmare",
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ScrollToTop />

      <Banner title="Character Guides">
        <div className="-mt-22 sm:-mt-20 md:-mt-18 lg:-mt-16 max-w-4xl mx-auto px-4">
          <div className="flex items-start gap-3 sm:gap-4 rounded-xl border border-yellow-500/30 bg-yellow-900/20 backdrop-blur-md px-4 sm:px-5 md:px-6 py-4 text-left shadow-sm">
            {/* Icon */}
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 mt-1 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 4h.01M10.29 3.86l-8.3 14.38A1 1 0 002.83 20h18.34a1 1 0 00.86-1.76L13.71 3.86a1 1 0 00-1.72 0z"
              />
            </svg>

            {/* Text content */}
            <div className="text-sm sm:text-base text-yellow-100/95 leading-relaxed">
              <strong className="font-semibold text-yellow-300">
                Work in Progress
              </strong>
              <p className="mt-1">
                These character guides are still being actively developed. Some
                information may be incomplete, outdated, inaccurate, or subject
                to change without notice.
              </p>

              <p className="mt-3 text-yellow-200/90">
                Want to help improve a specific character guide, add missing
                info, or correct something? Feel free to DM or ping me on the
                official Discord CZN server <strong>lilyium.box</strong> ♡
              </p>
            </div>
          </div>
        </div>
      </Banner>

      <main className="flex relative z-10 -mt-24 sm:-mt-24 md:-mt-28 lg:-mt-32">
        <div className="container mx-auto px-4 sm:px-6">{children}</div>
      </main>
    </div>
  );
}
