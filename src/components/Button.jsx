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
    "inline-flex items-center gap-3 uppercase font-bold tracking-wide transition-colors whitespace-nowrap border border-transparent text-xs text-center outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black duration-100";

  const sizeStyles = {
    sm: "h-12 px-6 text-sm",
    base: "h-14 sm:h-16 px-6 sm:px-8 text-sm sm:text-base",
  };

  const colorStyles = {
    primary: "bg-green-700 text-antique-100 hover:bg-green-800",
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
