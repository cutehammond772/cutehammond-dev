import React from "react";

import { HeadingMeta } from "@/shared/lib/anchor/types";

export interface Props {
  from: HeadingMeta["depth"];
  to: HeadingMeta["depth"];
  className?: string;
}

export default function Connection({ from, to, className }: Props) {
  const fromX = 10 + (from - 1) * 10;
  const toX = 10 + (to - 1) * 10;

  // 3차 베지어 곡선
  const path = `M ${fromX} 0 C ${fromX} 7, ${(fromX + toX) / 2} 10, ${(fromX + toX) / 2} 10 C ${(fromX + toX) / 2} 10, ${toX} 13, ${toX} 20`;

  return (
    <div className="relative min-h-5 min-w-10">
      <svg
        width="40"
        height="20"
        viewBox="0 0 40 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d={path}
          className={className}
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
