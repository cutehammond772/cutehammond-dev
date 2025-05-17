import { cn } from "@/shared/lib/shadcn-utils";
import { PolymorphicComponentProps } from "@/shared/types/polymorphic-component";
import { cva, type VariantProps } from "class-variance-authority";

type Props = VariantProps<typeof variants> & {
  className?: string;
};

const variants = cva("hidden md:block col-span-1 col-start-3");

export default function ResponsiveRight<C extends React.ElementType = "div">({
  as: PolymorphicComponent,
  className,
  ...props
}: PolymorphicComponentProps<C, Props>) {
  const Component = PolymorphicComponent ?? "div";
  return <Component className={cn(variants(), className)} {...props} />;
}
