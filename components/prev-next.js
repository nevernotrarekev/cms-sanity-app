import cn from "classnames";
import Link from "next/link";
import styles from "./prev-next.module.scss";

export default function PrevNext({ slug, text }) {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a className={styles.link}>
        <div className={styles.linkInnerWrap}>
          <div className={cn("text-carnation", styles.linkText)}>{text}</div>
        </div>
      </a>
    </Link>
  );
}
