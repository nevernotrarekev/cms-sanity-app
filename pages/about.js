import Container from "../components/container";
import Layout from "../components/layout";
import { getAboutData, getTestData } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import markdownStyles from "../components/markdown-styles.module.css";
import BlockContent from "@sanity/block-content-to-react";
import Slider from "react-slick";
import Sticky from 'react-sticky-el';

import { imageBuilder } from "../lib/sanity"

export default function Index({ aboutData, homeData }) {
  return (
    <>
      <Layout preview={false}>
        <Head>
          <title>{CMS_NAME} | Creative Collective | About</title>
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
          <div className="grid grid-cols-10 about-page">
            <div className="col-span-10 md:col-span-5">
              <h1 className="page-title mb-4">{aboutData.aboutSectionTitle}</h1>
              <div className="mb-10">
                <BlockContent
                  blocks={aboutData.aboutContent}
                  className={markdownStyles.markdown}
                />
              </div>
              {<h2 className="font-[600] text-6xl mb-4">{aboutData.subsection1Title}</h2>}
              <div className="mb-10">
                <BlockContent
                  blocks={aboutData.subsection1Content}
                  className={markdownStyles.markdown}
                />
              </div>
              {<h2 className="font-[600] text-6xl mb-4">{aboutData.subsection2Title}</h2>}
              <div className="mb-10">
                <BlockContent
                  blocks={aboutData.subsection2Content}
                  className={markdownStyles.markdown}
                />
              </div>
            </div>
            <div className="col-span-10 md:col-span-5 scrollArea">
              <Sticky offsetTransforms stickyStyle={{ top: '100px' }} topOffset={-100}>
                <img
                  alt={`Intro section Illustration of two men fighting near a portal`}
                  src={imageBuilder.image(aboutData.illo).height(500).url()}
                  className="mx-auto"
                />
              </Sticky>
            </div>
          </div>
        </Container>
        <div className="col-span-10 md:col-span-5 self-center about-page">
          <Slider arrows={false} slidesToShow={3} dots={true} drag={true}>
            {aboutData.imageGallery.map(image => (
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
      </Layout >
    </>
  );
}

export async function getServerSideProps({ preview = false }) {
  const aboutData = await getAboutData("/about");
  const homeData = await getTestData();
  return {
    props: { aboutData, preview, homeData }
  };
}
