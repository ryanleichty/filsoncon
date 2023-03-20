import localFont from "next/font/local";
import "~/styles/globals.css";

const interstate = localFont({
  src: [
    {
      path: "../fonts/Interstate-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Interstate-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Interstate-Black.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-interstate",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${interstate.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
