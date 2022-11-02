import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Anton"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="scrollbar-hide">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
