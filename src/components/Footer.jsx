import { schedule } from "~/data";
import { cx } from "~/utils";
import { Button } from "./Button";
import { FilsonconLogo } from "./FilsonconLogo";
import {
  IconFacebook,
  IconInstagram,
  IconMap,
  IconTwitter,
  IconYouTube,
} from "./Icon";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

export function Footer() {
  return (
    <MaxWidthWrapper className="grid items-center justify-center gap-8 bg-black py-8 text-center text-antique-100 lg:h-32 lg:grid-cols-3">
      <div className="flex items-center justify-center lg:justify-start">
        <p className="text-xs font-bold uppercase tracking-wider">
          Made in the USA
        </p>
      </div>
      <div className="flex items-center justify-center">
        <FilsonconLogo />
      </div>
      <div className="flex items-center justify-center lg:justify-end">
        <div className="flex items-center justify-center gap-5 lg:justify-end">
          <IconFacebook className="h-5 w-5" />
          <IconInstagram className="h-5 w-5" />
          <IconTwitter className="h-5 w-5" />
          <IconYouTube className="h-5 w-5" />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
