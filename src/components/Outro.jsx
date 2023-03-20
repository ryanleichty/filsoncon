import { MaxWidthWrapper } from "~/components/MaxWidthWrapper";
import { Button } from "./Button";
import { IconTicket } from "./Icon";

export function Outro() {
  return (
    <MaxWidthWrapper className="grid h-screen place-items-center bg-black text-antique-100">
      <div className="max-w-2xl text-center">
        <div className="text-sm font-bold uppercase tracking-wide">Join us</div>
        <h2 className="mt-2 text-5xl font-bold uppercase">Past and Present</h2>
        <p className="mt-8 text-2xl">
          Having a brand with a rich history, the past and present are
          intertwined. At our upcoming conference, we will explore what it means
          to be a journeyman in the context of Filson’s brand heritage, and how
          we can protect the environment for future generations. Join us and be
          part of the conversation.
        </p>
        <Button icon={IconTicket} className="mt-16">
          Register
        </Button>
      </div>
    </MaxWidthWrapper>
  );
}
