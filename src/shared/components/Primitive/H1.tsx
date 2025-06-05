import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/shadcn-utils";
import { PolymorphicComponentProps } from "@/shared/types/polymorphic-component";

const h1Variants = cva(
  "font-sans tracking-tight text-foreground text-2xl font-semibold md:text-3xl"
);

type Props = VariantProps<typeof h1Variants> & {
  className?: string;
};

export default function H1<C extends React.ElementType = "h1">({
  as: PolymorphicComponent,
  className,
  ...props
}: PolymorphicComponentProps<C, Props>) {
  const Component = PolymorphicComponent ?? "h1";
  return <Component className={cn(h1Variants(), className)} {...props} />;
}
