"use client";

import { Provider } from "jotai";
import ThemeContainer from "@/theme/ThemeContainer";

export default function BlogContainer({ children }: React.PropsWithChildren) {
  return (
    <Provider>
      <ThemeContainer>{children}</ThemeContainer>
    </Provider>
  );
}
