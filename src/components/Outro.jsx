import { MaxWidthWrapper } from "~/components/MaxWidthWrapper";
import img from "~/images/filson-10.jpg";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { IconTicket } from "./Icon";
import { Image } from "./Image";

export function Outro() {
  return (
    <MaxWidthWrapper as="section" className="relative bg-black">
      <div className="grid place-items-center py-16 text-antique-100 sm:py-32 xl:min-h-screen">
        <div className="pointer-events-none absolute inset-0 select-none bg-antique-100 opacity-50 mix-blend-color" />
        <Image
          src={img}
          quality={25}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-20"
        />
        <div className="isolate max-w-2xl text-center">
          <div className="text-sm font-bold uppercase tracking-wide">
            Join us
          </div>
          <Heading className="mt-2">Past and Present</Heading>
          <p className="mt-8 sm:text-2xl">
            Having a brand with a rich history, the past and present are
            intertwined. At our upcoming conference, we will explore what it
            means to be a journeyman in the context of Filson’s brand heritage,
            and how we can protect the environment for future generations. Join
            us and be part of the conversation.
          </p>
          <Button icon={IconTicket} className="mt-12 sm:mt-16">
            Register
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
