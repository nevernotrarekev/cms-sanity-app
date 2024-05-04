import Container from "../../components/container";
import Layout from "../../components/layout";
import { getSingleTalentData } from "../../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import ProjectsGrid from "../../components/projects-grid";

export default function Index({ data }) {
  const { talentName, talentTitle, talentDescription } = data[0];
  // migrating over to new project tagging structure for talent pages.
  let hasFeaturedWork = data && data.length > 0 && data[0]?.featuredWork;
  let hasProjects = data && data.length > 0 && data[0]?.projects;

  return (
    <div className="work-page">
      <Layout>
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
            <h1>{talentName}</h1>
            <h2 className="text-carnation" style={{ fontWeight: "400" }}>{talentTitle}</h2>
            <p style={{ fontWeight: "400" }}>{talentDescription}</p>

            <div className="mt-8">
              {!hasFeaturedWork && !hasProjects && <div>No projects found</div>}

              {hasFeaturedWork && (
                <div className="mb-100">
                  <ProjectsGrid posts={data[0].featuredWork} />
                </div>
              )}

              {!hasFeaturedWork && hasProjects && (
                <div className="mb-100">
                  <ProjectsGrid posts={data[0].projects} />
                </div>
              )}
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const data = await getSingleTalentData(params.slug);
  return {
    props: { data },
  };
}
