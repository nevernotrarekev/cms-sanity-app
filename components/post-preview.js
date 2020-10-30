import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({ title, brand, coverImage, slug }) {
  return (
    <div className="">
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a className="">
          <div className="relative ">
            <CoverImage slug={slug} title={title} url={coverImage} />
            <div className="absolute bottom-0 left-0 mb-2 ml-3 ">
              <h3 className="text-3xl leading-snug text-white">
                <span className="font-bold">{title}</span> / {brand}
              </h3>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
