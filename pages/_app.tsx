import "@styles/globals.scss"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import Head from "next/head"
import { useRouter } from "next/router"
import { ReactElement, ReactNode, useState } from "react"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { Cursor } from "react-creative-cursor"
import "react-creative-cursor/dist/styles.css"

config.autoAddCss = false

type NextPageWithLayout = NextPage & {
  getLayout?: (_page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <Head>
        <title>RAE</title>
        <meta
          name="description"
          content="Your web dev bestie"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/shibainu.ico"
        />
        <link
          href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css"
          rel="stylesheet"
          type="text/css"
        ></link>
      </Head>
      {/* <Component {...pageProps} /> */}
      <div className="opacity-10">
        <Cursor
          isGelly={false}
          animationDuration={1}
          cursorBackgrounColor={"#292931"}
          cursorSize={30}
        />
      </div>

      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
