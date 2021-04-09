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
    introtext: `text-carnation ${styles.stylesH4}`,
  };

  return (
    <section className={`mx-auto max-w-wide ${styles.container}`}>
      <div className={styles.wrap}>
        <div className={styles.textWrap}>
          <h4 className={classes.introtext}>
            {text}
          </h4>
        </div>
      </div>
    </section>
  );
}
