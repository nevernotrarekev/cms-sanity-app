import { useEffect } from "react";
import "../styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

import AOS from "aos/dist/aos.js";

import CovidBanner from "../components/covid-banner.js";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Component {...pageProps} />
      <CovidBanner />
    </div>
  );
}

export default MyApp;
