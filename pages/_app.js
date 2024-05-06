import { useEffect, useState } from "react";
import "../styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getCovidPage } from "../lib/api";
import CovidBanner from "../components/covid-banner.js";

function MyApp({ Component, pageProps }) {
  const [showCovidBanner, setShowCovidBanner] = useState(false);
  const [bannerText, setBannerText] = useState("");

  useEffect(async () => {
    // fetch covid page info
    const covidInfo = await getCovidPage("/about");

    if (covidInfo.enableBanner) {
      setShowCovidBanner(true);
      setBannerText(covidInfo.covidBannerText);
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
      {showCovidBanner && <CovidBanner bannerText={bannerText} />}
    </>
  );
}

export default MyApp;
