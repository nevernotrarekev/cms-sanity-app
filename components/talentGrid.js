import styles from "./talentGrid.module.css";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";

export default function TalentGrid({ talent, settings }) {
  const pageTitle =
    (Array.isArray(settings) &&
      settings?.length > 0 &&
      settings[0].talentSettingsHeadline) ||
    "Our Talent";
  const pageSubtitle =
    (Array.isArray(settings) &&
      settings?.length > 0 &&
      settings[0].talentSettingsSubtitle) ||
    "";

  const image =
    (Array.isArray(settings) &&
      settings?.length > 0 &&
      settings[0].talentSettingsImage) ||
    null;

  /* Omit Josh Rathmell 
      3/18/2024: Sean H - Projects refer to Josh Rathmell in Sanity's content, so he can't be deleted. Omitting from the Talent Grid for now.
  */
  const talentGrid = talent.filter((t) => t.talentName !== "Josh Rathmell" && t.slug.current !== "JoshRathmell");

  return (
    <div>
      <h1>{pageTitle}</h1>
      <h2 className="text-carnation text-xl" style={{ fontWeight: "400" }}>
        {pageSubtitle}
      </h2>
      <div className={styles["container"]}>
        <div className={styles["talent-grid"]}>
          {talentGrid.map((t) => (
            <div className={styles["talent-card"]}>
              <Link href={`/talent/${t?.slug?.current}`}>
                <h2>{t?.talentName}</h2>
                <h3>{t?.talentTitle}</h3>
                {/* <p>{t?.talentDescription}</p> */}
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.illo}>
          <img
            style={{ margin: "auto", paddingTop: "48px" }}
            alt={`Intro section Illustration of two men fighting near a portal`}
            src={imageBuilder.image(image).height(300).url()}
          />
        </div>
      </div>
    </div>
  );
}
