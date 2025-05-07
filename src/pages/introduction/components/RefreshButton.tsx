"use client";

import { useFormStatus } from "react-dom";

export default function RefreshButton() {
  const { pending } = useFormStatus();

  return (
    <button className="bg-beige-300 cursor-pointer p-4" type="submit">
      {pending ? "새로고침 중..." : "새로고침하기"}
    </button>
  );
}
