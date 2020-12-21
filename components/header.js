import react, { useState, useEffect } from "react";
import Link from "next/link";
import LogoSvg from "./logo-svg";
import styles from "./header.module.scss";
import cn from "classnames";
import { useRouter } from "next/router";

const DESKTOP_FIXED_SCROLL_POINT = 170;

export default function Header() {
  const router = useRouter();
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [showFixedNav, setShowFixedNav] = useState(false);

  console.log("router", router);

  const classes = {
    links: `${styles.links} ${burgerOpen ? "open" : ""}`,
    link: `ml-12 ${styles.link}`,
    burgerWrap: `${styles.burgerWrap} ${burgerOpen ? "open" : ""}`,
  };

  const handleScrollAnimation = () => {
    window.scrollY >= DESKTOP_FIXED_SCROLL_POINT
      ? setShowFixedNav(true)
      : setShowFixedNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollAnimation);

    return () => window.removeEventListener("scroll", handleScrollAnimation);
  }, []);

  const renderNav = ({ asFixed }) => {
    return (
      <nav
        className={` ${asFixed && styles["fixed-nav"]}  ${
          asFixed && showFixedNav && styles["show"]
        } container max-w-wide mx-auto px-5 flex lg:flex-row justify-between items-center lg:mb-12 md:mb-6 mb-20 mt-8`}
      >
        <div className="w-168px">
          <Link href="/">
            <a className="hover:underline">
              {asFixed ? (
                <img
                  className={burgerOpen ? styles.open : null}
                  src={"/mondial.gif"}
                />
              ) : (
                <LogoSvg />
              )}
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
            <a
              className={cn(
                classes.link,
                router.pathname === "/work" ? styles.active : null
              )}
            >
              Work
            </a>
          </Link>
          <Link href={"/play"}>
            <a
              className={cn(
                classes.link,
                router.pathname === "/play" ? styles.active : null
              )}
            >
              Play
            </a>
          </Link>
          <Link href={"/about"}>
            <a
              className={cn(
                classes.link,
                router.pathname === "/about" ? styles.active : null
              )}
            >
              About
            </a>
          </Link>
        </div>
      </nav>
    );
  };

  return (
    <>
      {renderNav({ asFixed: false })}
      {renderNav({ asFixed: true })}
    </>
  );
}
