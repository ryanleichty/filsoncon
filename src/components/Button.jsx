import Link from "next/link";
import { forwardRef } from "react";
import { cx } from "~/utils";

export const Button = forwardRef(function Button(
  {
    color = "primary",
    size = "base",
    icon: Icon,
    isLoading,
    loadingText = "Loading...",
    children,
    className,
    ...props
  },
  ref
) {
  const Component = props?.href ? Link : "button";

  const baseStyles =
    "inline-flex leading-none items-center justify-center gap-3 uppercase font-bold tracking-wide transition-colors whitespace-nowrap border border-transparent text-xs text-center outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black duration-100";

  const sizeStyles = {
    xs: "h-8 px-3 text-xs tracking-widest",
    sm: "h-12 px-6 text-sm",
    base: "h-14 sm:h-16 px-6 sm:px-8 text-sm sm:text-base",
  };

  const colorStyles = {
    primary: "bg-green-700 text-antique-100 hover:bg-green-800",
    secondary: "bg-black text-antique-100",
    white: "bg-antique-100 text-black hover:bg-antique-300",
  };

  return (
    <Component
      ref={ref}
      type={props?.href ? null : "button"}
      className={cx(
        baseStyles,
        sizeStyles[size],
        colorStyles[color],
        className
      )}
      {...props}
    >
      {Icon && <Icon size={size} />}
      {isLoading ? loadingText : children}
    </Component>
  );
});
