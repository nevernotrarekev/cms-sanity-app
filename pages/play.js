import Container from "../components/container";
import Layout from "../components/layout";
import { getAllPostsForPlay, getPlayData } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { imageBuilder } from "../lib/sanity";
import Vimeo from "@u-wave/react-vimeo";

export default function Index({ allPlay, playData, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <h1>{playData.pageTitle}</h1>
          <div className="grid grid-cols-12 gap-8">
            {playData.items.length > 0 &&
              playData.items.map((item, index) => {
                return (
                  <div className="col-span-4">
                    {item.playImage && (
                      <img src={imageBuilder.image(item.playImage).url()} />
                    )}
                    {item.vimeoid && (
                      <div>
                        <Vimeo
                          className="embed-responsive aspect-ratio-16/9"
                          video={item.vimeoid}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
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
