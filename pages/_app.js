import React from "react";
import "../src/scss/index.scss";

export function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
