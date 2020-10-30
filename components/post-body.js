import markdownStyles from "./markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";

export default function PostBody({ content, credits }) {
  return (
    <div className="grid grid-cols-12 flex flex-col flex-1 lg:flex-row mx-auto justify-between items-start">
      <div className="col-span-5 flex-grow">
        <BlockContent blocks={content} className={markdownStyles.markdown} />
      </div>
      <div className="col-start-9 col-span-4 flex-grow">
        <BlockContent blocks={credits} className={markdownStyles.markdown} />
      </div>
    </div>
  );
}
