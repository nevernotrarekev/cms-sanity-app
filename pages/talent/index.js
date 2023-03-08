import Container from "../../components/container";
import TalentGrid from "../../components/talentGrid";
import Layout from "../../components/layout";
import { getAllTalentData } from "../../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";

export default function Index({ allTalent, preview }) {
  return (
    <div className="work-page">
      <Layout preview={preview}>
        <Head>
          <title>{CMS_NAME} | Creative Collective | Talent</title>

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
          <TalentGrid talent={allTalent} />
        </Container>
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ preview = false }) {
  const allTalent = await getAllTalentData(preview);
  return {
    props: { allTalent, preview },
  };
}
