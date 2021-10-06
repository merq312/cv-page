import '../styles/globals.scss'
import Head from 'next/head'
import Header from '../components/header/header.component'
import Footer from '../components/footer/footer.component'
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

      <div className="content">
        <Header />

        <div className="container">
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>
    </>
  )
}
export default MyApp
