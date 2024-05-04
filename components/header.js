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
      <div>
        <nav
          className={` ${asFixed && styles["fixed-nav"]}  ${asFixed && showFixedNav && styles["show"]
            } container max-w-wide mx-auto px-5 flex lg:flex-row justify-between items-center lg:mb-12 md:mb-6 mb-20 mt-8 navbar-main `}
        >
          <div className="w-168px">
            <Link legacyBehavior href="/">
              <a
                className="hover:underline"
                data-aos={!asFixed && "fade-down"}
                data-aos-duration="600"
              >
                {asFixed ? (
                  <img
                    className={`${burgerOpen ? styles.open : null} gif-nav`}
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

            <Link legacyBehavior href={"/play"}>
              <a
                className={cn(
                  classes.link,
                  router.pathname === "/play" ? styles.active : null,
                  burgerOpen ? styles.menuLink : null
                )}
              >
                Production
              </a>
            </Link>
            <Link legacyBehavior href={"/work"}>
              <a
                className={cn(
                  classes.link,
                  router.pathname === "/work" ? styles.active : null,
                  burgerOpen ? styles.menuLink : null
                )}
              >
                Post
              </a>
            </Link>
            <Link legacyBehavior href={"/talent"}>
              <a
                className={cn(
                  classes.link,
                  router.pathname === "/talent" ? styles.active : null,
                  burgerOpen ? styles.menuLink : null
                )}
              >
                Talent
              </a>
            </Link>
            <Link legacyBehavior href={"/about"}>
              <a
                className={cn(
                  classes.link,
                  router.pathname === "/about" ? styles.active : null,
                  burgerOpen ? styles.menuLink : null
                )}
              >
                About
              </a>
            </Link>
          </div>
        </nav>
      </div>
    );
  };

  return (
    <>
      {renderNav({ asFixed: false })}
      {renderNav({ asFixed: true })}
    </>
  );
}
