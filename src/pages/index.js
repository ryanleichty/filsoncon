import Head from "next/head";
import { Footer } from "~/components/Footer";
import { Image } from "~/components/Image";
import { Intro } from "~/components/Intro";
import { Location } from "~/components/Location";
import { Outro } from "~/components/Outro";
import { Schedule } from "~/components/Schedule";
import { Speakers } from "~/components/Speakers";
import bannerImg1 from "~/images/filson-7.jpg";
import bannerImg2 from "~/images/filson-8.jpg";
import { HeaderScroll } from "../components/HeaderScroll";
import { Hero } from "../components/Hero";

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
        <HeaderScroll />
        <Hero />
        <Intro />
        <Speakers id="speakers" />
        <Image
          src={bannerImg1}
          alt="A frontiersman on horseback leading another horse through the great American West."
          className="aspect-[4/3] w-full object-cover xl:h-screen"
        />
        <Schedule id="schedule" />
        <Image
          src={bannerImg2}
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
