import Container from "../components/container";
import Featured from "../components/featured";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome, getTestData } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Carousel from "../components/carousel";

export default function Index({ allPosts, homeData, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Studio for {CMS_NAME}</title>
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
          <Intro text={homeData.text} image={homeData.illo} />
          {homeData.featuredWork.length > 0 && (
            <Featured posts={homeData.featuredWork} />
          )}
        </Container>
        <div>
          <div className="carousel-space">
            <Carousel items={homeData.featuredReels} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ preview = false }) {
  return {
    props: {
      allPosts: await getAllPostsForHome(false),
      homeData: await getTestData()
    }
  };
}
