import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/og.jpg" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body className="bg-antique-100 text-black antialiased selection:bg-green-700/75 selection:text-antique-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
