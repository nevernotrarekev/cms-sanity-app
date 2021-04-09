import { useEffect, useState } from "react";
import "../styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos/dist/aos.js";

import { getCovidPage } from "../lib/api";
import CovidBanner from "../components/covid-banner.js";

function MyApp({ Component, pageProps }) {
  const [showCovidBanner, setShowCovidBanner] = useState(false);
  const [bannerText, setBannerText] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(async () => {
    // fetch covid page info
    const covidInfo = await getCovidPage("/about");

    if (covidInfo.enableBanner) {
      setShowCovidBanner(true);
      setBannerText(covidInfo.covidBannerText);
    }
  }, []);

  return (
    <div>
      <Component {...pageProps} />
      {showCovidBanner && <CovidBanner bannerText={bannerText} />}
    </div>
  );
}

export default MyApp;
