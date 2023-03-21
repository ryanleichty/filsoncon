import { cx } from "~/utils";

export function Heading({
  lvl = 2,
  size = "base",
  children,
  className,
  ...props
}) {
  const Component = `h${lvl}`;

  const baseStyles = "font-bold uppercase tracking-wide";

  const sizeStyles = {
    sm: "text-2xl sm:text-2xl lg:text-3xl",
    base: "text-3xl sm:text-4xl lg:text-5xl",
    lg: "text-4xl sm:text-7xl lg:text-8xl",
  };

  return (
    <Component
      {...props}
      className={cx(baseStyles, sizeStyles[size], className)}
    >
      {children}
    </Component>
  );
}
