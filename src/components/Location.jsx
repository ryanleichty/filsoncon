import { schedule } from "~/data";
import { cx } from "~/utils";
import { Button } from "./Button";
import { IconMap } from "./Icon";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

export function Location() {
  return (
    <MaxWidthWrapper className="py-20 text-center">
      <h2 className="text-8xl font-bold uppercase">Location</h2>
      <p className="mt-8 text-3xl font-bold uppercase tracking-wide">
        Filson Flagship
      </p>
      <p className="mt-2 text-sm font-bold uppercase tracking-wider opacity-70">
        Seattle, Washington
      </p>
      <div className="mt-12 h-[640px] bg-black"></div>
      <div className="mt-12 text-center">
        <Button icon={IconMap} color="secondary">
          Directions
        </Button>
      </div>
    </MaxWidthWrapper>
  );
}
