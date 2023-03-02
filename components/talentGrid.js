import styles from "./talentGrid.module.css";
import Link from "next/link";

export default function TalentGrid({ talent }) {
  console.log(talent);
  return (
    <div className={styles["talent-grid"]}>
      {talent.map((t) => (
        <div>
          <Link href={`/talent/${t?.slug?.current}`}>
            <div>name: {t?.talentName}</div>
            <div>title: {t?.talentTitle}</div>
            <div>bio: {t?.talentDescription}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
