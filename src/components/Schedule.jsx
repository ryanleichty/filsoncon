import { schedule } from "~/data";
import { cx } from "~/utils";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { IconAnnoucement } from "./Icon";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

export function Schedule({ className, ...props }) {
  return (
    <MaxWidthWrapper
      as="section"
      className={cx("bg-green-800", className)}
      {...props}
    >
      <div className="py-16 text-antique-100 sm:py-20">
        <Heading size="lg" className="text-center">
          Schedule
        </Heading>
        <div className="mt-12 sm:mt-16">
          {schedule.map((date) => {
            const baseStyles =
              "border-t py-4 sm:h-16 flex flex-col gap-2 text-center sm:text-left sm:flex-row items-center";

            return (
              <div key={date?.date}>
                <h3
                  className={cx(
                    baseStyles,
                    "text-xl font-bold uppercase tracking-wide"
                  )}
                >
                  {date?.date}
                </h3>
                {date?.sessions.map((session) => {
                  return (
                    <div key={session?.time} className={baseStyles}>
                      <div className="w-full max-w-[160px]">
                        {session?.time}
                      </div>
                      <div className="font-bold uppercase tracking-wide">
                        {session?.topic}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="mt-8 text-center sm:mt-16">
          <Button icon={IconAnnoucement} color="white">
            Apply to speak
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
