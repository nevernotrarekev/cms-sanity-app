import Container from "../components/container";
import ProjectsGrid from "../components/projects-grid";
import Layout from "../components/layout";
import { getWorkData } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts, preview }) {
  const pageName = "Post Production"
  const pageSubhead = "Editorial, VFX and Finishing forms the MONDIAL studio foundation . Our dynamic in-house and remote team encompasses lead artists in Editorial, 2D, 3D, Design, Color and Finishing."
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
          <div className="mb-100">
            <h1>{pageName}</h1>
            <h2 className="text-carnation text-xl font-[400]">{pageSubhead}</h2>
            <div className="mt-8">
              {allPosts.allWork.length > 0 && (
                <ProjectsGrid posts={allPosts.allWork} />
              )}
            </div>
          </div>
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
