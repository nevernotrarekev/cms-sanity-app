import Container from "../components/container";
import Featured from "../components/featured";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome, getPageData, getFeatured } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Carousel from "../components/carousel";
import { useEffect } from "react";

export default function Index({ allPosts, allFeatured, homeData, preview }) {
  const posts = allPosts;

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Studio for {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro text={homeData.text} image={homeData.illo} />
          {posts.length > 0 && <Featured posts={posts} />}
        </Container>
        <div className="mt-12">
          <div className="carousel-space">
            <Carousel items={allFeatured} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const allFeatured = await getFeatured(preview);
  const homeData = await getPageData("/");

  console.log("home data", homeData);

  return {
    props: {
      allPosts,
      allFeatured,
      homeData,
      preview,
    },
  };
}
