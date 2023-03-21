import * as ToastPrimitive from "@radix-ui/react-toast";
import { cx } from "~/utils";
import { IconClose } from "./Icon";

export function Toast({ title, description, children, ...props }) {
  return (
    <ToastPrimitive.Root
      className={cx(
        "relative bg-antique-200 p-3 sm:p-4",
        "data-[state=closed]:animate-fadeOut data-[state=open]:animate-slideIn",
        "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
      )}
      {...props}
    >
      {title && (
        <ToastPrimitive.Title className="pr-9 text-sm font-bold uppercase tracking-wide opacity-70">
          {title}
        </ToastPrimitive.Title>
      )}

      {description && (
        <ToastPrimitive.Description className="text-2xl font-bold uppercase sm:text-4xl">
          {description}
        </ToastPrimitive.Description>
      )}

      {children && (
        <ToastPrimitive.Action className="mt-4" altText="View schedule" asChild>
          {children}
        </ToastPrimitive.Action>
      )}
    </ToastPrimitive.Root>
  );
}

export function ToastProvider({ children, ...props }) {
  return (
    <ToastPrimitive.Provider duration={5000000} {...props}>
      {children}
    </ToastPrimitive.Provider>
  );
}

export function ToastViewport() {
  return (
    <ToastPrimitive.Viewport className="fixed bottom-0 right-0 z-50 flex w-full max-w-sm flex-col gap-4 p-4 [--viewport-padding:16px] sm:max-w-md md:p-8 md:[--viewport-padding:32px]" />
  );
}
