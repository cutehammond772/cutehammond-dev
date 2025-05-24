import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/shadcn-utils";
import { PolymorphicComponentProps } from "@/shared/types/polymorphic-component";

const vstackVariants = cva("flex flex-col", {
  variants: {
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    items: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    gap: {
      0: "gap-0",
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      6: "gap-6",
      8: "gap-8",
      10: "gap-10",
      12: "gap-12",
      16: "gap-16",
      32: "gap-32",
    },
    wrap: {
      nowrap: "flex-nowrap",
      wrap: "flex-wrap",
      reverse: "flex-wrap-reverse",
    },
  },
  defaultVariants: {
    justify: "start",
    items: "stretch",
    wrap: "nowrap",
  },
});

type Props = VariantProps<typeof vstackVariants> & {
  className?: string;
};

export default function VStack<C extends React.ElementType = "div">({
  as: PolymorphicComponent,
  className,
  justify,
  gap,
  items,
  wrap,
  ...props
}: PolymorphicComponentProps<C, Props>) {
  const Component = PolymorphicComponent ?? "div";
  return (
    <Component
      className={cn(vstackVariants({ justify, gap, items, wrap }), className)}
      {...props}
    />
  );
}
