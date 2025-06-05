import { cn } from "@/shared/lib/shadcn-utils";
import { PolymorphicComponentProps } from "@/shared/types/polymorphic-component";
import { cva, type VariantProps } from "class-variance-authority";

type Props = VariantProps<typeof leftSideLayoutVariants> & {
  className?: string;
};

const leftSideLayoutVariants = cva(
  "col-span-1 col-start-1 row-span-3 row-start-1 relative hidden xl:block"
);

export default function LeftSideLayout<C extends React.ElementType = "aside">({
  as: PolymorphicComponent,
  className,
  ...props
}: PolymorphicComponentProps<C, Props>) {
  const Component = PolymorphicComponent ?? "aside";
  return (
    <Component className={cn(leftSideLayoutVariants(), className)} {...props} />
  );
}
