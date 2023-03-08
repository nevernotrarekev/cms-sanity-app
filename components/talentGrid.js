import styles from "./talentGrid.module.css";
import Link from "next/link";

export default function TalentGrid({ talent }) {
  return (
    <div className={styles["container"]}>
      <div>
        <h1>Our Talent</h1>
      </div>
      <div className={styles["talent-grid"]}>
        {talent.map((t) => (
          <div className={styles["talent-card"]}>
            <Link href={`/talent/${t?.slug?.current}`}>
              <h2>{t?.talentName}</h2>
              <h3>{t?.talentTitle}</h3>
              {/* <p>{t?.talentDescription}</p> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
