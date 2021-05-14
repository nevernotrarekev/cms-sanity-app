import Container from "../components/container";
import Layout from "../components/layout";
import { getCovidPage } from "../lib/api";
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
          <title>{CMS_NAME} | Creative Collective | COVID-19</title>

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
          <div className="mb-100">
            <h1>{aboutData.pageTitle}</h1>
            <div className="grid grid-cols-10 gap-8 mt-12">
              <div className="col-span-10 md:col-span-5">
                <div className="mt-6 about-page">
                  <BlockContent
                    blocks={aboutData.covidContent}
                    className={markdownStyles.markdown}
                  />
                </div>
              </div>
              <div className="col-span-10 md:col-span-5 self-center about-page">
                <Slider arrows={false} slidesToShow={1} dots={true} drag={true}>
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
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ preview = false }) {
  const aboutData = await getCovidPage("/about");
  return {
    props: { aboutData, preview }
  };
}
