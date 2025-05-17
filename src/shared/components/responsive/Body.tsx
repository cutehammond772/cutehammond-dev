import { cn } from "@/shared/lib/shadcn-utils";
import { PolymorphicComponentProps } from "@/shared/types/polymorphic-component";
import { cva, type VariantProps } from "class-variance-authority";

type Props = VariantProps<typeof variants> & {
  className?: string;
};

const variants = cva(
  "grid md:grid-cols-[1fr_4fr_1fr] lg:grid-cols-[1fr_2fr_1fr]"
);

export default function ResponsiveBody<C extends React.ElementType = "div">({
  as: PolymorphicComponent,
  className,
  ...props
}: PolymorphicComponentProps<C, Props>) {
  const Component = PolymorphicComponent ?? "div";
  return <Component className={cn(variants(), className)} {...props} />;
}
