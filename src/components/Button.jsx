import { cx } from "~/utils";

export function Button({
  color = "primary",
  icon: Icon,
  children,
  className,
  ...props
}) {
  const baseStyles =
    "h-16 px-8 inline-flex items-center gap-3 uppercase font-bold tracking-wide";

  const colorStyles = {
    primary: "bg-green-800 text-antique-100",
    secondary: "bg-black text-antique-100",
    white: "bg-antique-100 text-black",
  };

  return (
    <button
      className={cx(baseStyles, colorStyles[color], className)}
      {...props}
    >
      {Icon && <Icon />}
      {children}
    </button>
  );
}
