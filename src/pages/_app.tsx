import { ReactElement, ReactNode } from "react";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout): ReactNode => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <SessionProvider session={session}>
      <Head>
        <title>Polymo — Polymo is a tool that makes MVP development x10 faster by generating the Next.js + standard OSS code base.</title>
        <meta property="og:url" content="https://polymo.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Polymo" />
        <meta property="og:description" content="Polymo is a tool that makes MVP development x10 faster by generating the Next.js + standard OSS code base." />
        <meta property="og:site_name" content="Polymo" />
        <meta property="og:image" content="https://polymo.dev/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
