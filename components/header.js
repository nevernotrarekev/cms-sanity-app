import Link from "next/link";
import LogoSvg from "./logo-svg";
LogoSvg;

export default function Header() {
  return (
    <nav className="container mx-auto px-5 flex lg:flex-row justify-between items-center lg:mb-12 md:mb-6 mb-20 mt-8">
      <div>
        <Link href="/">
          <a className="hover:underline">
            <LogoSvg />
          </a>
        </Link>
      </div>
      <div className="ml-5">
        <Link href={"/work"}>
          <a className="ml-5">Work</a>
        </Link>
        <Link href={"/play"}>
          <a className="ml-5">Play</a>
        </Link>
        <Link href={"/about"}>
          <a className="ml-5">About</a>
        </Link>
      </div>
    </nav>
  );
}
