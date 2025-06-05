"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScrollEvent() {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = 100 * (scrollTop / documentHeight);

      if (ref.current) {
        ref.current.style.width = `${scrollPercent}%`;
      }
    }

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div ref={ref} className="bg-primary fixed top-0 z-10 h-1 w-0 shadow-2xl" />
  );
}
