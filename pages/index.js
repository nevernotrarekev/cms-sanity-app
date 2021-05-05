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
        <title>{CMS_NAME} | Creative Collective </title>
        <meta name="description" content="A Creative Collective Focused on Production, Post-Production, and Design">

                <!-- Facebook Meta Tags -->
                <meta property="og:url" content="https://mndl.com">
                <meta property="og:type" content="website">
                <meta property="og:title" content="Mondial | Creative Collective ">
                <meta property="og:description" content="A Creative Collective Focused on Production, Post-Production, and Design">
                <meta property="og:image" content="https://mondial.vercel.app/footer-illo.png">

                <!-- Twitter Meta Tags -->
                <meta name="twitter:card" content="summary_large_image">
                <meta property="twitter:domain" content="mndl.com">
                <meta property="twitter:url" content="https://mndl.com">
                <meta name="twitter:title" content="Mondial | Creative Collective ">
                <meta name="twitter:description" content="A Creative Collective Focused on Production, Post-Production, and Design">
                <meta name="twitter:image" content="https://mondial.vercel.app/footer-illo.png">

                <!-- Meta Tags Generated via https://www.opengraph.xyz -->
                </meta>
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
      homeData: await getTestData(),
    },
  };
}
