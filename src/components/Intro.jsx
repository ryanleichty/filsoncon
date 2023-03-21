import { Image } from "~/components/Image";
import { MaxWidthWrapper } from "~/components/MaxWidthWrapper";
import img from "~/images/filson-2.jpg";

export function Intro() {
  return (
    <MaxWidthWrapper as="section">
      <div className="grid gap-12 pb-16 pt-4 lg:grid-cols-2 lg:gap-5 lg:py-32">
        <Image
          src={img}
          sizes="(max-width: 1024px) 100vw, 50vw"
          alt="A group of lumberjacks from the early 1900s"
          className="mx-auto aspect-video w-full max-w-screen-sm select-none object-cover"
        />
        <div className="grid place-items-center">
          <div className="max-w-md text-center">
            <div className="text-sm font-bold uppercase tracking-wide">
              Purpose
            </div>
            <h2 className="mt-2 text-3xl font-bold uppercase">
              Filsoncon 2023
            </h2>
            <p className="mt-8 text-xl">
              We believe that our past informs our future. Our brand is a
              reflection of our journey as pioneers and protectors of the
              environment. Join us at our upcoming conference as we explore what
              it means to carry on that legacy.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
