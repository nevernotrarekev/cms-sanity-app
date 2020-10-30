import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import Vimeo from "@u-wave/react-vimeo";

export default function PostHeader({
  title,
  brand,
  coverImage,
  vimeoid,
  type,
}) {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-end lg:mb-12 md:mb-6">
        <PostTitle>
          {title} / {brand}
        </PostTitle>
        {type}
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <Vimeo className="embed-responsive aspect-ratio-16/9" video={vimeoid} />
      </div>
    </>
  );
}
