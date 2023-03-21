import { cx } from "~/utils";

export function MaxWidthWrapper({
  as: Component = "div",
  full,
  children,
  className,
  ...props
}) {
  return (
    <Component
      {...props}
      className={cx("mx-auto w-full px-4 md:px-8", className)}
    >
      <div className={cx("mx-auto", full ? "" : "max-w-screen-2xl")}>
        {children}
      </div>
    </Component>
  );
}
