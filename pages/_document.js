import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

const analyticsConfig = {
  vars: {
    account: "UA-74078643-1",
  },
  triggers: {
    trackPageview: {
      // Trigger names can be any string. trackPageview is not a required name.
      on: "visible",
      request: "pageview",
    },
  },
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html amp="" lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link rel="canonical" href="https://carson.kiwi/" />
          <meta name="description" content="CV of Carson Bruce" />

          <link rel="icon" type="image/svg" href="/favicon.svg" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta name="theme-color" content="#3F51B5" />

          <script async src="https://cdn.ampproject.org/v0.js" />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=optional"
            rel="stylesheet"
            type="text/css"
          />
        </Head>

        <body>
          <Main />
          <NextScript />

          <amp-analytics type="googleanalytics" id="analytics1">
            <script
              type="application/json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(analyticsConfig).replace(/&quot;/g, '"'),
              }}
            />
          </amp-analytics>
        </body>
      </Html>
    );
  }
}
