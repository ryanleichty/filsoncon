import NextImage from "next/image";
import { cx } from "../utils";

export function Image({ className, ...props }) {
  return (
    <NextImage
      sizes="100vw"
      placeholder="blur"
      className={cx("bg-black", className)}
      {...props}
    />
  );
}
