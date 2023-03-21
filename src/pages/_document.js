import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-antique-100 text-black antialiased selection:bg-green-800/75 selection:text-antique-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
