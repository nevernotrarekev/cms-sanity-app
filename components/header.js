import react, { useState, useEffect } from "react";
import Link from "next/link";
import LogoSvg from "./logo-svg";
import styles from "./header.module.scss";
import cn from "classnames";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [burgerOpen, setBurgerOpen] = useState(false);
  const classes = {
    links: `${styles.links} ${burgerOpen ? "open" : ""}`,
    link: `ml-12 ${styles.link}`,
    burgerWrap: `${styles.burgerWrap} ${burgerOpen ? "open" : ""}`,
  };

  useEffect(() => {
    const handleRouteComplete = (url) => {
      console.log("App changed to: ", url);
      // setBurgerOpen(false);
    };

    router.events.on("routeChangeComplete", handleRouteComplete);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeComplete", handleRouteComplete);
    };
  }, []);
  return (
    <nav className="container max-w-wide mx-auto px-5 flex lg:flex-row justify-between items-center lg:mb-12 md:mb-6 mb-20 mt-8">
      <div className="w-168px">
        <Link href="/">
          <a className="hover:underline">
            <LogoSvg />
          </a>
        </Link>
      </div>
      <div
        className={cn(styles.burgerWrap, burgerOpen ? styles.open : null)}
        onClick={() => setBurgerOpen(!burgerOpen)}
      >
        <div></div>
        <div></div>
      </div>
      <div className={cn(styles.links, burgerOpen ? styles.open : null)}>
        <Link href={"/work"}>
          <a className={classes.link}>Work</a>
        </Link>
        <Link href={"/play"}>
          <a className={classes.link}>Play</a>
        </Link>
        <Link href={"/about"}>
          <a className={classes.link}>About</a>
        </Link>
      </div>
    </nav>
  );
}
