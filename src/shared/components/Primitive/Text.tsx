import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/shadcn-utils";
import { PolymorphicComponentProps } from "@/shared/types/polymorphic-component";

const textVariants = cva("text-sm md:text-base", {
  variants: {
    font: {
      sans: "font-sans",
      serif: "font-serif",
      mono: "font-mono",
    },
    size: {
      default: "text-sm md:text-base",
      sm: "text-xs md:text-sm",
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
    variant: "default",
    font: "serif",
    size: "default",
  },
});

type Props = VariantProps<typeof textVariants> & {
  className?: string;
};

export default function Text<C extends React.ElementType = "span">({
  as: PolymorphicComponent,
  font,
  variant,
  size,
  className,
  ...props
}: PolymorphicComponentProps<C, Props>) {
  const Component = PolymorphicComponent ?? "span";
  return (
    <Component
      className={cn(textVariants({ font, variant, size }), className)}
      {...props}
    />
  );
}
