import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

// export type NextPageWithLayout = NextPage & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };

// export type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };

// export default function App({ Component, pageProps }: AppPropsWithLayout) {

//   const getLayout = Component.getLayout ?? ((page) => page)

//   return (
//     <>
//       <Head>
//         <title>{'Next JS'}</title>
//       </Head>
//       {getLayout(<Component {...pageProps} />)}
//     </>
//   )
// }

export default function App({ Component, pageProps }: AppProps) {

  
    return (
      <>
        <Head>
          <title>{'Next JS'}</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }