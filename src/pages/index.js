import Head from "next/head";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Image } from "~/components/Image";
import { Intro } from "~/components/Intro";
import { Location } from "~/components/Location";
import { MaxWidthWrapper } from "~/components/MaxWidthWrapper";
import { Outro } from "~/components/Outro";
import { Schedule } from "~/components/Schedule";
import { Speakers } from "~/components/Speakers";
import bannerImg1 from "~/images/filson-1.jpg";
import bannerImg2 from "~/images/filson-7.jpg";
import bannerImg3 from "~/images/filson-8.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Filsoncon</title>
        <meta
          name="description"
          content="The Journeyman: Heritage and the Environment • October 6, 2023 • Seattle, Washington"
        />
      </Head>
      <main>
        <div className="relative bg-black text-antique-100 sm:min-h-screen">
          <div className="absolute inset-0 bg-antique-100 opacity-50 mix-blend-color" />
          <Image
            src={bannerImg1}
            quality={25}
            priority
            alt=""
            className="absolute h-full w-full select-none object-cover opacity-20"
          />
          <Header className="isolate" />
          <MaxWidthWrapper full className="isolate">
            <div className="grid place-items-center content-center pt-10 pb-20 text-center sm:min-h-screen-no-nav">
              <h1 className="font-black uppercase">
                <span className="block text-[6vw] leading-none">The</span>
                <span className="block text-[12.5vw] leading-none tracking-tight">
                  Journeyman
                </span>
              </h1>
              <div className="mt-8 flex flex-col items-center justify-center gap-2 text-xl sm:text-3xl md:flex-row md:gap-8">
                <p>
                  Heritage and
                  <br />
                  the Environment
                </p>
                <div>×</div>
                <p>
                  October 6, 2023
                  <br />
                  Seattle, Washington
                </p>
              </div>
              <p className="mt-8 text-xs font-bold uppercase tracking-widest sm:mt-12 sm:text-base">
                A Filson company Conference
              </p>
            </div>
          </MaxWidthWrapper>
        </div>
        <Intro />
        <Speakers id="speakers" />
        <Image
          src={bannerImg2}
          alt="A frontiersman on horseback leading another horse through the great American West."
          className="aspect-[4/3] w-full object-cover xl:h-screen"
        />
        <Schedule id="schedule" />
        <Image
          src={bannerImg3}
          alt="A sailor working the sails on a ship."
          className="aspect-[4/3] w-full object-cover xl:h-screen"
        />
        <Location id="location" />
        <Outro />
        <Footer />
      </main>
    </>
  );
}
