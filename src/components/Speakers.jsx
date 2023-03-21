import { Image } from "~/components/Image";
import { MaxWidthWrapper } from "~/components/MaxWidthWrapper";
import { speakers } from "~/data";
import speakerImg1 from "~/images/filson-3.jpg";
import speakerImg2 from "~/images/filson-4.jpg";
import speakerImg3 from "~/images/filson-5.jpg";
import speakerImg4 from "~/images/filson-6.jpg";
import { cx } from "../utils";
import { Heading } from "./Heading";

const speakerImages = [speakerImg1, speakerImg2, speakerImg3, speakerImg4];

export function Speakers({ className, ...props }) {
  return (
    <MaxWidthWrapper
      as="section"
      className={cx("bg-antique-50", className)}
      {...props}
    >
      <div className="py-16 sm:py-20">
        <Heading size="lg" className="text-center">
          Speakers
        </Heading>
        <div className="mt-12 grid grid-cols-2 gap-5 gap-y-10 sm:mt-16 lg:grid-cols-4">
          {speakers.map((speaker, i) => {
            return (
              <div key={speaker.name} className="grid gap-5">
                <Image
                  src={speakerImages[i]}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  alt={speaker.name}
                  className="aspect-square bg-antique-100 object-cover"
                />
                <div className="text-center">
                  <div className="text-xs font-bold uppercase leading-none tracking-widest opacity-70">
                    {speaker.title}
                  </div>
                  <Heading
                    lvl={3}
                    size="sm"
                    className="mt-2 leading-[1.1!important]"
                  >
                    {speaker.name}
                  </Heading>
                  <div className="mt-2.5 text-xs font-bold uppercase leading-none tracking-widest opacity-70">
                    {speaker.location}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
