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
      {/* ? Button */}
      <div
        ref={btnRef}
        className="absolute top-2 right-2 z-10"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-800/70 border border-purple-600/40 text-purple-300 text-xs font-bold hover:bg-purple-900/50 hover:border-purple-500 transition-all">
          ?
        </div>
      </div>

      {/* Tooltip */}
      {open &&
        rect &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: rect.top - 5,
              left: rect.right,
              transform: "translate(-100%, -100%)",
              zIndex: 9999,
            }}
            className="pointer-events-none"
          >
            <div
              className="
              bg-gray-900/95 backdrop-blur-md
              border border-purple-500/50
              rounded-lg px-4 py-3
              text-gray-200 text-sm font-medium
              shadow-2xl shadow-purple-900/40
              min-w-max
            "
            >
              <div className="whitespace-pre-line">{sources.join("\n")}</div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
