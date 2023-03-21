import { useEffect, useState } from "react";
import { useWindowScroll, useWindowSize } from "react-use";
import { menu } from "~/data";
import { cx } from "~/utils";
import { Button } from "./Button";
import { FilsonconLogo } from "./FilsonconLogo";
import { IconTicket } from "./Icon";

export function HeaderScroll({ className, ...props }) {
  const { y } = useWindowScroll();
  const { height } = useWindowSize();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    y > height ? setIsScrolled(true) : setIsScrolled(false);
  }, [y, height]);

  return (
    <header
      className={cx(
        "fixed z-40 hidden h-12 w-full grid-cols-3 items-center justify-between gap-8 bg-black text-antique-100 transition-transform lg:grid",
        !isScrolled ? "-translate-y-full" : null,
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-4 pl-4 md:pl-8">
        <FilsonconLogo className="h-4 w-auto" />
      </div>
      <div className="flex items-center justify-center gap-4">
        <nav className="flex items-center gap-8">
          {menu.map((item) => {
            return (
              <a
                key={item.title}
                href={item.url}
                className="text-sm font-bold uppercase tracking-wider"
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
  );
}
