import Container from "../components/container";
import Layout from "../components/layout";
import { getAboutData } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import markdownStyles from "../components/markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";
import { imageBuilder } from "../lib/sanity";

export default function Index({ aboutData, preview }) {
  console.log(aboutData);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <h1>{aboutData.pageTitle}</h1>
          <div className="grid grid-cols-10 gap-8">
            <div className="col-span-10 md:col-span-5">
              <h3 className>{aboutData.aboutSectionTitle}</h3>
              <div className="mt-6">
                <BlockContent
                  blocks={aboutData.aboutContent}
                  className={markdownStyles.markdown}
                />
              </div>
            </div>
            <div className="col-span-10 md:col-span-5 self-center">
              <img
                src={imageBuilder
                  .image(aboutData.aboutImage)
                  .width(612)
                  .height(409)
                  .url()}
              />
            </div>
          </div>
          <div className="grid grid-cols-10 gap-8 mt-5 md:mt-10">
            <div className="col-span-5 md:col-span-3">
              <img
                src={imageBuilder
                  .image(aboutData.aboutImage2)
                  .width(338)
                  .height(519)
                  .url()}
              />
            </div>
            <div className="col-span-5 md:col-span-3">
              <img
                src={imageBuilder
                  .image(aboutData.aboutImage3)
                  .width(338)
                  .height(519)
                  .url()}
              />
            </div>
            <div className="col-span-10 md:col-span-4 self-center">
              <h3>{aboutData.subsection1Title}</h3>
              <BlockContent
                blocks={aboutData.subsection1Content}
                className={markdownStyles.markdown}
              />
              <h3>{aboutData.subsection2Title}</h3>
              <BlockContent
                blocks={aboutData.subsection2Content}
                className={markdownStyles.markdown}
              />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const aboutData = await getAboutData("/about");
  return {
    props: { aboutData, preview },
  };
}
