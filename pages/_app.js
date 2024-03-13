import Layout from "../components/Layout";
import "../styles/bootstrap-grid.min.css";
import "../styles/prism.css";
import "../styles/style.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>STET__BEAUTY</title>
        <meta
          content="We strategically design beautiful brands, websites, and digital products that actually work."
          property="og:description"
        ></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
