import { cn } from "@/shared/lib/shadcn-utils";
import { PolymorphicComponentProps } from "@/shared/types/polymorphic-component";
import { cva, type VariantProps } from "class-variance-authority";

type Props = VariantProps<typeof variants> & {
  className?: string;
};

const variants = cva("px-4 md:px-0 md:col-span-1 md:col-start-2");

export default function ResponsiveCenter<C extends React.ElementType = "div">({
  as: PolymorphicComponent,
  className,
  ...props
}: PolymorphicComponentProps<C, Props>) {
  const Component = PolymorphicComponent ?? "div";
  return <Component className={cn(variants(), className)} {...props} />;
}
