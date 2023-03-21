import { FilsonconFilsonLogo } from "./FilsonconFilsonLogo";
import { IconFacebook, IconInstagram, IconTwitter, IconYouTube } from "./Icon";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

export function Footer() {
  return (
    <MaxWidthWrapper as="footer" className="bg-black">
      <div className="grid items-center justify-center gap-8 py-8 text-center text-antique-100 lg:h-32 lg:grid-cols-3">
        <div className="flex items-center justify-center lg:justify-start">
          <p className="text-xs font-bold uppercase tracking-wider">
            Made in the USA
          </p>
        </div>
        <div className="flex items-center justify-center">
          <FilsonconFilsonLogo />
        </div>
        <div className="flex items-center justify-center lg:justify-end">
          <div className="flex items-center justify-center gap-5 lg:justify-end">
            <IconFacebook className="h-5 w-5" />
            <IconInstagram className="h-5 w-5" />
            <IconTwitter className="h-5 w-5" />
            <IconYouTube className="h-5 w-5" />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
