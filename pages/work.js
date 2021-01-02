import Container from "../components/container";
import ProjectsGrid from "../components/projects-grid";
import Layout from "../components/layout";
import { getWorkData } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts, preview }) {
  const posts = allPosts;
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Work Page {CMS_NAME}</title>
        </Head>
        <Container>
          {posts.length > 0 && (
            <div className="mb-100">
              <ProjectsGrid posts={posts.allWork} />
            </div>
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getServerSideProps({ preview = false }) {
  const allPosts = await getWorkData(preview);
  return {
    props: { allPosts, preview },
  };
}
