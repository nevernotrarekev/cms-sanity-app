import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import Vimeo from "@u-wave/react-vimeo";
import styles from "./post-header.module.scss";

import { imageBuilder } from "../lib/sanity";

export default function PostHeader({
  title,
  brand,
  coverImage,
  vimeoid,
  type,
}) {
  return (
    <div className={styles.header}>
      <div
        className="flex  lg:flex-row post-header-row items-end "
        style={{ marginBottom: "25px" }}
      >
        <PostTitle>
          <b>{brand}</b> / {title}
        </PostTitle>
        <div className={styles.tag}>{type && type.length && type.join(" / ") || type}</div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        {!vimeoid ? (
          <img
            alt={`Cover Image for ${title}`}
            src={imageBuilder.image(coverImage).url()}
            style={{ width: "100%" }}
          />
        ) : (
          <Vimeo
            className="embed-responsive aspect-ratio-16/9"
            video={vimeoid}
          />
        )}
      </div>
    </div>
  );
}
