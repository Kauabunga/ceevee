import React from "react";
import Head from "next/head";
import "../src/scss/index.scss";

export function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Carson Bruce CV</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
