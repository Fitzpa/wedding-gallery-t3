// src/pages/_app.tsx
import { withTRPC } from '@trpc/next';
import type { AppRouter } from '../server/router';
import type { AppType } from 'next/dist/shared/lib/utils';
import { getCookie, setCookies } from 'cookies-next';
import type { AppProps } from 'next/app';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import superjson from 'superjson';
import '../styles/globals.css';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { url } from '../constants';
import { useState } from 'react';
import Head from 'next/head';
import { GlobalStyles } from '../components/Global';

const MyApp = (props: AppProps & { colorScheme: ColorScheme }) => {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };
  return (
    <>
      <Head>
        <title>Pendlefitz Wedding Gallery</title>
        <meta name="description" content="Katie Pendleton and Louie Fitzpatrick's wedding image gallery." />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      </Head>
      <MantineProvider theme={{ fontFamily: 'Maginia', headings: {fontFamily: "Maginia", fontSize: ["4.75rem","4.75rem","4.75rem","4.75rem","4.75rem","4.75rem"]}, colorScheme }} withGlobalStyles withNormalizeCSS>
        <GlobalStyles />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const links = [
      loggerLink(),
      httpBatchLink({
        maxBatchSize: 10,
        url,
      }),
    ];
    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60,
          },
        },
      },
      links,
      transformer: superjson,
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
