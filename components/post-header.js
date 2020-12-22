import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import Vimeo from "@u-wave/react-vimeo";
import styles from "./post-header.module.scss";

export default function PostHeader({
  title,
  brand,
  coverImage,
  vimeoid,
  type,
}) {
  return (
    <div className={styles.header}>
      <div className="flex flex-col lg:flex-row justify-between items-end ">
        <PostTitle>
          <b>{brand}</b> / {title}
        </PostTitle>
        <div className={styles.tag}>{type}</div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <Vimeo className="embed-responsive aspect-ratio-16/9" video={vimeoid} />
      </div>
    </div>
  );
}
