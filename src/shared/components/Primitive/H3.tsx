import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/shadcn-utils";
import { PolymorphicComponentProps } from "@/shared/types/polymorphic-component";

const h3Variants = cva(
  "font-sans tracking-tight text-foreground text-lg font-semibold md:text-xl"
);

type Props = VariantProps<typeof h3Variants> & {
  className?: string;
};

export default function H3<C extends React.ElementType = "h3">({
  as: PolymorphicComponent,
  className,
  ...props
}: PolymorphicComponentProps<C, Props>) {
  const Component = PolymorphicComponent ?? "h3";
  return <Component className={cn(h3Variants(), className)} {...props} />;
}
