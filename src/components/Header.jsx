import { useWindowScroll, useWindowSize } from "react-use";
import { menu } from "~/data";
import { cx } from "~/utils";
import { Button } from "./Button";
import { FilsonconLogo } from "./FilsonconLogo";
import { IconMenu, IconTicket } from "./Icon";

export function Header({ className, ...props }) {
  const { y } = useWindowScroll();
  const { height } = useWindowSize();

  return (
    <>
      <header
        className={cx(
          "fixed z-40 grid h-12 w-full grid-cols-3 items-center justify-between gap-8 bg-black transition-transform",
          y < height ? "-translate-y-full" : null
        )}
      >
        <div className="flex items-center gap-4">
          <FilsonconLogo className="h-4 shrink-0" />
        </div>
        <div className="flex items-center justify-center gap-4">
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
          </nav>
        </div>
        <div className="flex items-center justify-end gap-4">
          <Button icon={IconTicket} size="sm">
            Register
          </Button>
        </div>
      </header>
      <header
        className={cx(
          "flex h-nav items-center justify-between px-8",
          className
        )}
        {...props}
      >
        <div>
          <FilsonconLogo />
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
          <Button icon={IconTicket}>Register</Button>
        </nav>
      </header>
    </>
  );
}
