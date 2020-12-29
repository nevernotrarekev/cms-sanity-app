import Container from "../components/container";
import Featured from "../components/featured";
import Intro from "../components/intro";
import Layout from "../components/layout";
import {
  getAllPostsForHome,
  getPageData,
  getFeatured,
  getTestData,
} from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Carousel from "../components/carousel";

export default function Index({
  allPosts,
  allFeatured,
  homeData,
  preview,
  testData,
}) {
  const posts = allPosts;

  console.log("client side test data", testData);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Studio for {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro text={testData.text} image={testData.illo} />
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

  const testData = await getTestData();
  console.log("test data", testData);

  return {
    props: {
      allPosts,
      allFeatured,
      homeData,
      preview,
      testData,
    },
  };
}
