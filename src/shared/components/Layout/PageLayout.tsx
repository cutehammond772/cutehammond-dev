import { cn } from "@/shared/lib/shadcn-utils";
import { PolymorphicComponentProps } from "@/shared/types/polymorphic-component";
import { cva, type VariantProps } from "class-variance-authority";

type Props = VariantProps<typeof pageLayoutVariants> & {
  className?: string;
};

const pageLayoutVariants = cva(
  "grid md:grid-cols-[1fr_768px_1fr] grid-rows-[auto_1fr_auto] min-h-screen gap-y-32"
);

export default function PageLayout<C extends React.ElementType = "body">({
  as: PolymorphicComponent,
  className,
  ...props
}: PolymorphicComponentProps<C, Props>) {
  const Component = PolymorphicComponent ?? "body";
  return (
    <Component className={cn(pageLayoutVariants(), className)} {...props} />
  );
}
