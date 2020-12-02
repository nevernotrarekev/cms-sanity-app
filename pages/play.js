import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPostsForPlay, getPlayData } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import PlayGrid from "../components/play-grid";

export default function Index({ allPlay, playData, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Play page {CMS_NAME}</title>
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

export async function getStaticProps({ preview = false }) {
  const allPlay = await getAllPostsForPlay(preview);
  const playData = await getPlayData("/play");
  return {
    props: { allPlay, playData, preview },
  };
}
