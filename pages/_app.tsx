import '../styles/globals.scss'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Chamila Gunasena</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          httpEquiv="Content-type"
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
