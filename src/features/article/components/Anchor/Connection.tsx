import React from "react";

import { HeadingMeta } from "@/shared/lib/anchor/types";
import { cn } from "@/shared/lib/shadcn-utils";

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
    <svg
      viewBox="0 0 40 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={cn("stroke-primary min-h-5 w-10 shrink-0", className)}
    >
      <path
        d={path}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
