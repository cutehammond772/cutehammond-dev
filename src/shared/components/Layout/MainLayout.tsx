import { cn } from "@/shared/lib/shadcn-utils";
import { PolymorphicComponentProps } from "@/shared/types/polymorphic-component";
import { cva, type VariantProps } from "class-variance-authority";

type Props = VariantProps<typeof mainLayoutVariants> & {
  className?: string;
};

const mainLayoutVariants = cva(
  "col-span-1 col-start-2 row-span-1 row-start-2 p-4 md:p-8"
);

export default function MainLayout<C extends React.ElementType = "main">({
  as: PolymorphicComponent,
  className,
  ...props
}: PolymorphicComponentProps<C, Props>) {
  const Component = PolymorphicComponent ?? "main";
  return (
    <Component className={cn(mainLayoutVariants(), className)} {...props} />
  );
}
