import reactToText from "react-to-text";

import { cn } from "@/shared/lib/shadcn-utils";
import { PolymorphicComponentProps } from "@/shared/types/polymorphic-component";
import { generateId } from "@/shared/lib/anchor/id";

import H1 from "../../Primitive/H1";
import H2 from "../../Primitive/H2";
import H3 from "../../Primitive/H3";

type HeadingComponent = typeof H1 | typeof H2 | typeof H3;

export default function HeadingWithId<C extends HeadingComponent = typeof H1>({
  as: PolymorphicComponent,
  children,
  className,
  ...props
}: PolymorphicComponentProps<C, { children: React.ReactNode }>) {
  const Component = PolymorphicComponent ?? H1;

  // Component로부터 헤딩 텍스트를 추출합니다.
  const text = reactToText(children);
  const uniqueId = generateId(text);

  return (
    <Component
      id={uniqueId}
      className={cn("scroll-mt-30", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
