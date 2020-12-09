import "../styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CovidBanner from "../components/covid-banner.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <CovidBanner />
    </>
  );
}

export default MyApp;
