import { cn } from "@/shared/lib/shadcn-utils";
import { PolymorphicComponentProps } from "@/shared/types/polymorphic-component";
import { cva, type VariantProps } from "class-variance-authority";

type Props = VariantProps<typeof footerLayoutVariants> & {
  className?: string;
};

const footerLayoutVariants = cva(
  "col-span-1 col-start-2 row-span-1 row-start-3 p-4 md:p-8"
);

export default function FooterLayout<C extends React.ElementType = "footer">({
  as: PolymorphicComponent,
  className,
  ...props
}: PolymorphicComponentProps<C, Props>) {
  const Component = PolymorphicComponent ?? "footer";
  return (
    <Component className={cn(footerLayoutVariants(), className)} {...props} />
  );
}
