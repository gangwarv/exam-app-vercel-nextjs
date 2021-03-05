import React from "react";
import Head from "next/head";

export default function Header() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <title>Example</title>

      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="favicon.ico" type="image/png" />
      <link
        href="/icons/firefox/firefox-general-16-16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/icons/firefox/firefox-general-32-32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      <meta name="theme-color" content="#317EFB" />

      {/* <link
            key="w3css"
            rel="stylesheet"
            href="https://www.w3schools.com/w3css/4/w3.css"
          /> */}
      {/* <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/semantic-ui@latest/dist/semantic.min.css"
          /> */}

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
  
    </Head>
  );
}
