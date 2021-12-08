import React from "react";
import Head from "next/head";
import "../src/scss/index.scss";

export function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Carson Bruce CV</title>
        <meta name="viewport" content="width=device-width,minimum-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
