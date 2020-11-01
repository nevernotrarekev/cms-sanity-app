import Container from "../components/container";
import Featured from "../components/featured";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome, getPageData } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts, homeData, preview }) {
  console.log(allPosts);
  const posts = allPosts;
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro text={homeData.text} image={homeData.illo} />
          {posts.length > 0 && <Featured posts={posts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const homeData = await getPageData("/");
  return {
    props: {
      allPosts,
      homeData,
      preview,
    },
  };
}
