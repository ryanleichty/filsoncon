import { cx } from "~/utils";

export function MaxWidthWrapper({
  as: Component = "div",
  children,
  className,
  ...props
}) {
  return (
    <Component
      {...props}
      className={cx("relative mx-auto w-full px-4 md:px-8", className)}
    >
      {children}
    </Component>
  );
}
