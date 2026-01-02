// components/GearTooltip.tsx
"use client";

import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";

interface GearTooltipProps {
  sources: string[];
}

export function GearTooltip({ sources }: GearTooltipProps) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLDivElement>(null);

  if (sources.length === 0) return null;

  const rect = btnRef.current?.getBoundingClientRect();

  return (
    <>
      {/* ? Trigger Button */}
      <div
        ref={btnRef}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="cursor-help"
      >
        <div
          className="
            w-8 h-8 flex items-center justify-center rounded-xl
            bg-gray-900/80 backdrop-blur-sm
            border border-gray-700
            text-gray-300 text-sm font-bold
            transition-all duration-300
            hover:border-gray-700 hover:bg-gray-900/90
            hover:shadow-lg hover:shadow-purple-900/20
            group
          "
        >
          ?
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
        </div>
      </div>
      {open &&
        rect &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: rect.top + rect.height / 2,
              left: rect.right + 12,
              transform: "translateY(-50%)",
              zIndex: 9999,
            }}
            className="pointer-events-none"
          >
            <div
              className="
                relative overflow-hidden rounded-2xl
                bg-gradient-to-br from-gray-900/50 to-gray-950/70
                backdrop-blur-sm border border-gray-800
                px-5 py-4
                text-gray-200 text-sm leading-relaxed
                shadow-2xl shadow-purple-900/30
                min-w-max max-w-xs
                transition-all duration-300 ease-out
                animate-in fade-in slide-in-from-left-2
                group
              "
            >
              <div className="relative z-10">
                <div className="whitespace-pre-line">{sources.join("\n")}</div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10" />
              </div>
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
