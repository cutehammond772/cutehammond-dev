"use client";

import { RefreshCcw } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { useFormStatus } from "react-dom";
import Text from "@/shared/components/Primitive/Text";

export default function RefreshButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      <RefreshCcw className={`mr-2 h-4 w-4 ${pending ? "animate-spin" : ""}`} />
      {pending ? "로딩 중..." : "새로고침"}
    </Button>
  );
}
