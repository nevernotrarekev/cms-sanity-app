import Link from "next/link";
import LogoSvg from "./logo-svg";
import styles from "./header.module.css";

export default function Header() {
  const classes = {
    link: `ml-12 ${styles.link}`,
  };
  return (
    <nav className="container max-w-wide mx-auto px-5 flex lg:flex-row justify-between items-center lg:mb-12 md:mb-6 mb-20 mt-8">
      <div className="w-168px">
        <Link href="/">
          <a className="hover:underline">
            <LogoSvg />
          </a>
        </Link>
      </div>
      <div className="ml-5">
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
