import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/shadcn-utils";
import { PolymorphicComponentProps } from "@/shared/types/polymorphic-component";

const h2Variants = cva(
  "font-sans tracking-tight text-foreground text-xl font-semibold md:text-2xl"
);

type Props = VariantProps<typeof h2Variants> & {
  className?: string;
};

export default function H2<C extends React.ElementType = "h2">({
  as: PolymorphicComponent,
  className,
  ...props
}: PolymorphicComponentProps<C, Props>) {
  const Component = PolymorphicComponent ?? "h2";
  return <Component className={cn(h2Variants(), className)} {...props} />;
}
