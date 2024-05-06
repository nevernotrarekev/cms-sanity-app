import Container from "../components/container";
import Layout from "../components/layout";
import { getPlayData } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import PlayGrid from "../components/play-grid";

export default function Index({ playData, preview }) {
  const pageName = playData.pageTitle ?? "Production";
  const pageSubhead = "We offer full live action production services based on the individual needs of each production brief, in isolation or as part of a complete soup to nuts MONDIAL production solution.";
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{pageName} page {CMS_NAME}</title>
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
            <h1 className="page-title">{pageName}</h1>
            <h2
              className="text-carnation text-xl font-[400]">{pageSubhead}</h2>
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
    props: { playData, preview },
  };
}
