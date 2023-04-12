import Container from "../../components/container";
import Layout from "../../components/layout";
import { getSingleTalentData } from "../../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import ProjectsGrid from "../../components/projects-grid";

export default function Index({ data }) {

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
          {!hasFeaturedWork && !hasProjects && <div>No projects found</div>}

          {hasFeaturedWork && (
            <div className="mb-100">
              <ProjectsGrid
                name={data[0].talentName}
                posts={data[0].featuredWork}
                subtitleOne={data[0].talentTitle}
                subtitleTwo={data[0].talentDescription}
              />{" "}
            </div>
          )}

          {!hasFeaturedWork && hasProjects && (
            <div className="mb-100">
              <ProjectsGrid
                name={data[0].talentName}
                posts={data[0].projects}
                subtitleOne={data[0].talentTitle}
                subtitleTwo={data[0].talentDescription}
              />{" "}
            </div>
          )}
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
