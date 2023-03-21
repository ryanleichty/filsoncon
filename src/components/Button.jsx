import { cx } from "~/utils";

export function Button({
  color = "primary",
  size = "base",
  icon: Icon,
  children,
  className,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center gap-3 uppercase font-bold tracking-wide";

  const sizeStyles = {
    sm: "h-12 px-6 text-sm",
    base: "h-14 sm:h-16 px-6 sm:px-8 text-sm sm:text-base",
  };

  const colorStyles = {
    primary: "bg-green-800 text-antique-100",
    secondary: "bg-black text-antique-100",
    white: "bg-antique-100 text-black",
  };

  return (
    <button
      className={cx(
        baseStyles,
        sizeStyles[size],
        colorStyles[color],
        className
      )}
      {...props}
    >
      {Icon && <Icon size={size} />}
      {children}
    </button>
  );
}
