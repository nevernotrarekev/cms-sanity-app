import cn from "classnames";
import { imageBuilder } from "../lib/sanity";
import styles from "./intro.module.css";

export default function Intro({ text, image }) {
  const illo = (
    <img
      alt={`Intro section Illustration of two men fighting near a portal`}
      src={imageBuilder.image(image).height(402).url()}
    />
  );
  // easily combine tailwind and css modules
  const classes = {
    introtext: `col-span-8 md:col-span-8 mt-10 text-carnation ${styles.stylesH4}`,
  };

  return (
    <section className="mx-auto max-w-wide">
      <div className="grid gap-8 grid-cols-12 flex-row flex items-center md:justify-between mt-16 mb-16 ">
        <h4 className={classes.introtext}>{text}</h4>
        <div className="col-span-4 md:col-span-4 mx-auto mt-12 md:mt-0">
          {illo}
        </div>
      </div>
    </section>
  );
}
