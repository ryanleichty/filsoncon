import { MaxWidthWrapper } from "~/components/MaxWidthWrapper";

export function Intro() {
  return (
    <MaxWidthWrapper
      as="section"
      className="grid gap-12 py-16 lg:grid-cols-2 lg:gap-5 lg:py-32"
    >
      <div className="h-[320px] bg-black"></div>
      <div className="grid place-items-center">
        <div className="max-w-md text-center">
          <div className="text-sm font-bold uppercase tracking-wide">
            Purpose
          </div>
          <h2 className="mt-2 text-3xl font-bold uppercase">Filsoncon 2023</h2>
          <p className="mt-8 text-xl">
            We believe that our past informs our future. Our brand is a
            reflection of our journey as pioneers and protectors of the
            environment. Join us at our upcoming conference as we explore what
            it means to carry on that legacy.
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
