import img from "~/images/filson-9.jpg";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { IconMap } from "./Icon";
import { Image } from "./Image";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

export function Location({ className, ...props }) {
  return (
    <MaxWidthWrapper as="section" className={className} {...props}>
      <div className="py-16 text-center sm:py-20">
        <Heading size="lg">Location</Heading>
        <Heading lvl="3" size="sm" className="mt-6 sm:mt-8">
          Filson Flagship
        </Heading>
        <p className="mt-2 text-sm font-bold uppercase tracking-wider opacity-70">
          Seattle, Washington
        </p>
        <Image
          src={img}
          alt=""
          className="mx-auto mt-8 aspect-video w-full max-w-screen-lg object-cover sm:mt-12"
        />
        <div className="mt-8 text-center sm:mt-12">
          <Button icon={IconMap} color="secondary">
            Directions
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
