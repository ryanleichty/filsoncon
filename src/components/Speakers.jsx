import { MaxWidthWrapper } from "~/components/MaxWidthWrapper";
import { speakers } from "~/data";

export function Speakers() {
  return (
    <MaxWidthWrapper className="bg-antique-50 py-20">
      <h2 className="text-center text-8xl font-bold uppercase">Speakers</h2>
      <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {speakers.map((speaker) => {
          return (
            <div key={speaker.name} className="grid gap-5">
              <div className="aspect-square bg-antique-100"></div>
              <div className="text-center">
                <div className="text-xs font-bold uppercase leading-none tracking-widest opacity-70">
                  {speaker.title}
                </div>
                <h3 className="mt-2 text-2xl font-bold uppercase leading-7">
                  {speaker.name}
                </h3>
                <div className="mt-2.5 text-xs font-bold uppercase leading-none tracking-widest opacity-70">
                  {speaker.location}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </MaxWidthWrapper>
  );
}
