import React from "react";
import { menu } from "~/data";
import { cx } from "~/utils";
import { Button } from "./Button";
import { FilsonconFilsonLogo } from "./FilsonconFilsonLogo";
import { IconMenu, IconTicket } from "./Icon";
import { Toast } from "./Toast";

export const Header = React.forwardRef(function Header(
  { className, ...props },
  ref
) {
  const [open, setOpen] = React.useState(false);
  const [isRegistering, setIsRegistering] = React.useState(false);
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  function handleClick() {
    setIsRegistering(true);
    setOpen(false);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setIsRegistering(false);
      setOpen(true);
    }, 1500);
  }

  return (
    <header
      ref={ref}
      className={cx("flex h-nav items-center justify-between px-8", className)}
      {...props}
    >
      <div>
        <FilsonconFilsonLogo />
      </div>
      <IconMenu className="xl:hidden" />
      <nav className="hidden items-center gap-8 xl:flex">
        {menu.map((item) => {
          return (
            <a
              key={item.title}
              href={item.url}
              className="font-bold uppercase tracking-wider"
            >
              {item.title}
            </a>
          );
        })}
        <Button
          icon={IconTicket}
          onClick={handleClick}
          isLoading={isRegistering}
        >
          Register
        </Button>
      </nav>
      <Toast
        // open={open}
        // onOpenChange={setOpen}
        title="Registered"
        description="Filsoncon 2023"
      >
        <Button size="xs" href="#schedule" className="w-full">
          View schedule
        </Button>
      </Toast>
    </header>
  );
});
