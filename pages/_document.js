import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>FarmOR</title>
        <link
          rel="icon"
          href="https://farmor-app-images.s3.ap-south-1.amazonaws.com/user/image-1669024040409.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Anton"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body className="scrollbar-hide">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
