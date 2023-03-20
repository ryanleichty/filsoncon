import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cx(...classValue) {
  return twMerge(clsx(classValue));
}
