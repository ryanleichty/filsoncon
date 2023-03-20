import Head from "next/head";
import { Header } from "~/components/Header";
import { MaxWidthWrapper } from "~/components/MaxWidthWrapper";
import { Schedule } from "~/components/Schedule";
import { Speakers } from "~/components/Speakers";
import { Footer } from "../components/Footer";
import { Intro } from "../components/Intro";
import { Location } from "../components/Location";
import { Outro } from "../components/Outro";

export default function Home() {
  return (
    <>
      <Head>
        <title>Filsoncon</title>
        <meta name="description" content="Heritage and the Environment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <div className="h-screen bg-black text-antique-100">
          <Header />
          <MaxWidthWrapper className="grid h-screen-no-nav place-items-center text-center">
            <div>
              <h1 className="font-black uppercase">
                <span className="block text-[6vw] leading-none">The</span>
                <span className="block text-[12.5vw] leading-none tracking-tight">
                  Journeyman
                </span>
              </h1>
              <div className="mt-8 flex items-center justify-center text-3xl">
                <p className="max-w-xs">Heritage and the Environment</p>
                <p className="max-w-xs">October 6, 2023 Seattle, Washington</p>
              </div>
              <p className="mt-12 font-bold uppercase tracking-widest">
                A Filson company Conference
              </p>
            </div>
          </MaxWidthWrapper>
        </div>
        <Intro />
        <Speakers />
        <div className="h-screen bg-black"></div>
        <Schedule />
        <div className="h-screen bg-black"></div>
        <Location />
        <Outro />
        <Footer />
      </main>
    </>
  );
}
