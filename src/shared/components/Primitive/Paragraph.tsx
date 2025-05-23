import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/shadcn-utils";
import { PolymorphicComponentProps } from "@/shared/types/polymorphic-component";

const paragraphVariants = cva("text-base leading-loose break-keep", {
  variants: {
    font: {
      mono: "font-mono",
      serif: "font-serif",
      sans: "font-sans",
    },
    variant: {
      default: "",
      muted: "text-muted-foreground",
      primary: "text-primary-foreground",
      secondary: "text-secondary-foreground",
      destructive: "text-destructive-foreground",
      accent: "text-accent-foreground",
    },
  },
  defaultVariants: {
    font: "serif",
    variant: "default",
  },
});

type Props = VariantProps<typeof paragraphVariants> & {
  className?: string;
};

export default function Paragraph<C extends React.ElementType = "p">({
  as: PolymorphicComponent,
  font,
  variant,
  className,
  ...props
}: PolymorphicComponentProps<C, Props>) {
  const Component = PolymorphicComponent ?? "p";
  return (
    <Component
      className={cn(paragraphVariants({ font, variant }), className)}
      {...props}
    />
  );
}
