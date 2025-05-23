import { cn } from "@/shared/lib/shadcn-utils";
import { PolymorphicComponentProps } from "@/shared/types/polymorphic-component";
import { cva, type VariantProps } from "class-variance-authority";

type Props = VariantProps<typeof headerLayoutVariants> & {
  className?: string;
};

const headerLayoutVariants = cva(
  "col-span-1 col-start-2 row-span-1 row-start-1 p-4 md:p-8 sticky top-0"
);

export default function HeaderLayout<C extends React.ElementType = "header">({
  as: PolymorphicComponent,
  className,
  ...props
}: PolymorphicComponentProps<C, Props>) {
  const Component = PolymorphicComponent ?? "header";
  return (
    <Component className={cn(headerLayoutVariants(), className)} {...props} />
  );
}
