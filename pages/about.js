import Container from "../components/container";
import Layout from "../components/layout";
import { getAboutData } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import markdownStyles from "../components/markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";
import Slider from "react-slick";

import { imageBuilder } from "../lib/sanity";

export default function Index({ aboutData, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>About page {CMS_NAME}</title>
        </Head>
        <Container>
          <div className="mb-100">
            <h1>{aboutData.pageTitle}</h1>
            <div className="grid grid-cols-10 gap-8 mt-12">
              <div className="col-span-10 md:col-span-5">
                <h4 className>{aboutData.aboutSectionTitle}</h4>
                <div className="mt-6 about-page">
                  <BlockContent
                    blocks={aboutData.aboutContent}
                    className={markdownStyles.markdown}
                  />
                </div>
              </div>
              <div className="col-span-10 md:col-span-5 self-center about-page">
                <Slider
                  arrows={false}
                  slidesToShow={1}
                  dots={true}
                 
                  drag={true}
                  
                >
                  {aboutData.imageGallery.map((image) => (
                    <img
                      src={imageBuilder
                        .image(image)
                        .width(612)
                        .height(409)
                        .url()}
                    />
                  ))}
                </Slider>
              </div>
            </div>
            <div className="grid grid-cols-10 gap-8 mt-12 md:mt-12">
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
              <div
                className={`${markdownStyles.text} col-span-10 md:col-span-3 self-center`}
              >
                <h4 className="mb-4">{aboutData.subsection1Title}</h4>
                <BlockContent
                  blocks={aboutData.subsection1Content}
                  className={markdownStyles.markdown}
                />
                <h4 className="mb-4">{aboutData.subsection2Title}</h4>
                <BlockContent
                  blocks={aboutData.subsection2Content}
                  className={markdownStyles.markdown}
                />
              </div>
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
