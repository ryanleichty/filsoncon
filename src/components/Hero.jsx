import { motion } from "framer-motion";
import bannerImg1 from "~/images/filson-1.jpg";
import { cx } from "../utils";
import { Header } from "./Header";
import { Image } from "./Image";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

const MotionHeader = motion(Header);

const header = {
  hidden: {
    opacity: 0,
    y: -24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const heroParent = {
  hidden: "",
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const heroChild = {
  hidden: {
    y: 16,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

export function Hero({ className, ...props }) {
  return (
    <div
      className={cx(
        "relative bg-black text-antique-100 sm:min-h-screen",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-antique-100 opacity-50 mix-blend-color" />
      <Image
        src={bannerImg1}
        quality={25}
        priority
        alt=""
        className="absolute h-full w-full select-none object-cover opacity-20"
      />

      <MotionHeader
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            type: "spring",
            duration: 1,
          },
        }}
        className="isolate"
      />

      <MaxWidthWrapper full className="isolate">
        <motion.div
          variants={heroParent}
          initial="hidden"
          animate="visible"
          className="grid place-items-center content-center pt-10 pb-20 text-center sm:min-h-screen-no-nav"
        >
          <h1 className="font-black uppercase">
            <motion.span
              variants={heroChild}
              className="block text-[6vw] leading-none"
            >
              The
            </motion.span>
            <motion.span
              variants={heroChild}
              className="block text-[12.5vw] leading-none tracking-tight"
            >
              Journeyman
            </motion.span>
          </h1>
          <div className="mt-8 flex flex-col items-center justify-center gap-2 text-xl sm:text-3xl md:flex-row md:gap-8">
            <motion.p variants={heroChild}>
              Heritage and
              <br />
              the Environment
            </motion.p>
            <motion.div variants={heroChild}>×</motion.div>
            <motion.p variants={heroChild}>
              October 6, 2023
              <br />
              Seattle, Washington
            </motion.p>
          </div>
          <motion.p
            variants={heroChild}
            className="mt-8 text-xs font-bold uppercase tracking-widest sm:mt-12 sm:text-base"
          >
            A Filson company Conference
          </motion.p>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
}
