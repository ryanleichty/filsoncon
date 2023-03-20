import { schedule } from "~/data";
import { cx } from "~/utils";
import { Button } from "./Button";
import { IconAnnoucement } from "./Icon";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

export function Schedule() {
  return (
    <MaxWidthWrapper className="bg-green-800 py-20 text-antique-100">
      <h2 className="text-center text-8xl font-bold uppercase">Schedule</h2>
      <div className="mt-16">
        {schedule.map((date) => {
          const baseStyles = "border-t h-16 flex items-center";

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
                    <div className="w-full max-w-[160px]">{session?.time}</div>
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
      <div className="mt-16 text-center">
        <Button icon={IconAnnoucement} color="white">
          Apply to speak
        </Button>
      </div>
    </MaxWidthWrapper>
  );
}
