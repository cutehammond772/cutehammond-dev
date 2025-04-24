"use client";

import { Provider } from "jotai";
import React from "react";

export default function JotaiProvider({ children }: React.PropsWithChildren) {
  return <Provider>{children}</Provider>;
}