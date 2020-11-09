import { imageBuilder } from "../lib/sanity";
import styles from "./cover-image.module.css";
import cn from "classnames";

export default function CoverImage({ index, title, image, isLink }) {
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

  return (
    <div
      className={cn(
        "w-full h-full",
        isLink &&
          "opacity-75 hover:opacity-40 transition duration-500 ease-in-out"
      )}
    >
      {builtImage}
    </div>
  );
}
