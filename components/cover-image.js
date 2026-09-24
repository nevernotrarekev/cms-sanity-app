import { imageBuilder } from "../lib/sanity";
import styles from "./cover-image.module.css";
import cn from "classnames";

export default function CoverImage({ index, title, image, isLink }) {
  const classes = {
    image: `object-cover w-full block ${styles.image}`,
  };
  const src = (w) => imageBuilder.image(image).width(w).url();
  // the first couple of tiles are above the fold, so only lazy-load the rest
  const isAboveFold = index === undefined || index < 2;
  const builtImage = (
    <img
      alt={title ? `Cover Image for ${title}` : undefined}
      className={classes.image}
      src={src(1280)}
      srcSet={`${src(640)} 640w, ${src(960)} 960w, ${src(1280)} 1280w`}
      sizes="(max-width: 768px) 100vw, 1280px"
      loading={isAboveFold ? "eager" : "lazy"}
      decoding="async"
    />
  );

  return (
    <div className={cn(styles.overlay, "w-full h-full")}>{builtImage}</div>
  );
}
