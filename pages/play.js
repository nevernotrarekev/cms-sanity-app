import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPostsForPlay, getPlayData } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import PlayGrid from "../components/play-grid";

export default function Index({ playData, preview }) {
  console.log("play data", playData);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Play page {CMS_NAME}</title>
          <meta
            name="description"
            content="A Creative Collective Focused on Production, Post-Production, and Design"
          />
          <meta
            property="og:image"
            content={
              "https://user-images.githubusercontent.com/972100/118293617-d28e2080-b4a7-11eb-93ad-631d8019cd80.jpg"
            }
            key="image"

          />

        </Head>
        <Container>
          <div className="mb-100">
            <h1>{playData.pageTitle}</h1>
            <div className="mt-8">
              <PlayGrid items={playData.items} />
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ preview = false }) {
  const playData = await getPlayData("/play");
  return {
    props: { playData, preview }
  };
}
