"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

interface Props extends React.PropsWithChildren {
  content: string;
}

export default function CopyButton({ content, children }: Props) {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      variant="outline"
      aria-label="복사"
      onClick={() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
        navigator.clipboard.writeText(content);
      }}
      className="max-w-1/2 overflow-hidden md:max-w-1/3"
    >
      {children}
      {copied ? <Check size={20} /> : <Copy size={20} />}
    </Button>
  );
}
