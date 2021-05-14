import Container from "../components/container";
import ProjectsGrid from "../components/projects-grid";
import Layout from "../components/layout";
import { getWorkData } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts, preview }) {
  return (
    <div className="work-page">
      <Layout preview={preview}>
        <Head>
          <title>{CMS_NAME} | Creative Collective | Work</title>

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
          {allPosts.allWork.length > 0 && (
            <div className="mb-100">
              <ProjectsGrid posts={allPosts.allWork} />
            </div>
          )}
        </Container>
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ preview = false }) {
  const allPosts = await getWorkData(preview);
  return {
    props: { allPosts, preview }
  };
}
