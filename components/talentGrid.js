import styles from "./talentGrid.module.css";
import Link from "next/link";
import { imageBuilder } from "../lib/sanity";

export default function TalentGrid({ talent, settings }) {
  console.log({ settings });

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

  return (
    <div>
      <h1>{pageTitle}</h1>
      <h2 className="text-carnation text-xl" style={{ fontWeight: "400" }}>
        {pageSubtitle}
      </h2>
      <div className={styles["container"]}>
        <div>
          <img
            style={{ margin: "auto", paddingTop: "48px" }}
            alt={`Intro section Illustration of two men fighting near a portal`}
            src={imageBuilder.image(image).height(300).url()}
          />
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
    </div>
  );
}
