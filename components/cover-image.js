import cn from "classnames";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";
import styles from "./cover-image.module.css";

export default function CoverImage({ index, title, image }) {
  const classes = {
    image: `object-cover w-full block ${styles.image}`,
  };
  const builtImage = (
    <img
      alt={`Cover Image for ${title}`}
      className={classes.image}
      src={imageBuilder.image(image).url()}
    />
  );

  return <div className="w-full h-full">{builtImage}</div>;
}
