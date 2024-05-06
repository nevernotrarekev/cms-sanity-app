import { imageBuilder } from "../lib/sanity";
import styles from "./cover-image.module.css";
import cn from "classnames";

export default function CoverImage({ index, title, image, isLink }) {
  const classes = {
    image: `object-cover w-full block ${styles.image}`,
  };
  const builtImage = (
    <img
      alt={title ? `Cover Image for ${title}` : undefined}
      className={classes.image}
      src={imageBuilder.image(image).url()}
    />
  );

  return (
    <div className={cn(styles.overlay, "w-full h-full")}>{builtImage}</div>
  );
}
