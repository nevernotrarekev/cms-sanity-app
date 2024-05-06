import Container from "../../components/container";
import Layout from "../../components/layout";
import { getAllTalentData, getAllTalentSettingsData } from "../../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import Sticky from "react-sticky-el";
import Link from "next/link";
import { imageBuilder } from "../../lib/sanity";

export default function Index({ allTalent, settings, preview }) {

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

  const talentGrid = allTalent.filter((t) => t.talentName !== "Josh Rathmell" && t.slug.current !== "JoshRathmell");

  return (
    <div className="work-page">
      <Layout preview={preview} fullHeight={false}>
        <Head>
          <title>{CMS_NAME} | Creative Collective | Talent</title>
          <meta
            name="description"
            content="A Creative Collective Focused on Production, Post-Production, and Design"
          />
          <meta
            property="og:image"
            content={
              "https://user-images.githubusercontent.com/972100/118293617-d28e2080-b4a7-11eb-93ad-631d8019cd80.jpg"
            }
          />
        </Head>
        <Container>
          <div className="grid grid-cols-10 mb-10">
            <div className="flex flex-col col-span-10 md:col-span-5">
              <h1>{pageTitle}</h1>
              <p className="mb-8 text-balance">
                {pageSubtitle}
              </p>
              {
                talentGrid.map((t) => (
                  <Link className="flex gap-1 mb-8 hover:text-carnation" href={`/talent/${t?.slug?.current}`}>
                    <span className="font-bold">{t?.talentName}</span>
                    <span>|</span>
                    <span>{t?.talentTitle.replaceAll('|', '/')}</span>
                  </Link>
                ))
              }
            </div>
            <div className="col-span-10 md:col-span-5 scrollArea">
              <Sticky offsetTransforms stickyStyle={{ top: '100px' }} topOffset={-100}>
                <img
                  style={{ margin: "auto", paddingTop: "48px" }}
                  alt={`Intro section Illustration of a person turning into vines`}
                  src={imageBuilder.image(image).height(500).url()}
                />
              </Sticky>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ preview = false }) {
  const allTalent = await getAllTalentData(preview);
  const settings = await getAllTalentSettingsData(preview);
  return {
    props: { allTalent, settings, preview },
  };
}
