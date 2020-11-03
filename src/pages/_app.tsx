import '../../public/global-styles.scss';
import { AppProps } from 'next/app';
import Head from 'next/head'
import Navbar from '../components/navbar/navbar.component';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (<>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@AR_Renaissance" />
            <meta name="twitter:title" content="ARDD" />
            <meta name="twitter:description" content="Arab Renaissance and Democracy" />
            <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/ardd-94d08.appspot.com/o/Home%20Page%2Fdefault-article-thumbnail.jpg?alt=media&token=fd00d173-b9a5-4274-a9bf-724e33ec3b37" />

            {/* facebook and other social sites */}
            <meta property="og:type" content="article" />
            <meta property="og:site_name" content="Ardd-jo" />
            <meta property="og:title" content="ARDD" />
            <meta property="og:description" content="Arab Renaissance and Democracy" />
            <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/ardd-94d08.appspot.com/o/Home%20Page%2Fdefault-article-thumbnail.jpg?alt=media&token=fd00d173-b9a5-4274-a9bf-724e33ec3b37" />
            <meta property="og:url" content="https://ardd-jo.org/" />
            <title>ARDD</title>
        </Head>
        <Navbar></Navbar>
        <Component  {...pageProps} />
    </>)
}