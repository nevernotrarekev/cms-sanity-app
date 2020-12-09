import { useState, useEffect } from "react";
import styles from "./covid-banner.module.css";

const CovidBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasDismissedBanner = sessionStorage.getItem("mondial_covid_banner");

    if (!hasDismissedBanner) {
      setShowBanner(true);
    }
  }, []);

  const closeBanner = () => {
    setShowBanner(false);
    sessionStorage.setItem("mondial_covid_banner", true);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <h5>Hello world this is our covid banner copy</h5>
        <a href="#">Learn More</a>
        <svg
          onClick={closeBanner}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#f25b5d"
        >
          <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
        </svg>
      </div>
    </div>
  );
};

export default CovidBanner;
