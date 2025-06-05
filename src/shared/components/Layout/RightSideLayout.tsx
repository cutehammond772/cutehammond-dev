import { cn } from "@/shared/lib/shadcn-utils";
import { PolymorphicComponentProps } from "@/shared/types/polymorphic-component";
import { cva, type VariantProps } from "class-variance-authority";

type Props = VariantProps<typeof rightSideLayoutVariants> & {
  className?: string;
};

const rightSideLayoutVariants = cva(
  "col-span-1 col-start-3 row-span-3 row-start-1 relative hidden xl:block"
);

export default function RightSideLayout<C extends React.ElementType = "aside">({
  as: PolymorphicComponent,
  className,
  ...props
}: PolymorphicComponentProps<C, Props>) {
  const Component = PolymorphicComponent ?? "aside";
  return (
    <Component
      className={cn(rightSideLayoutVariants(), className)}
      {...props}
    />
  );
}
