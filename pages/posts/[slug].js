import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import Link from "next/link";

export default function Post({ post, morePosts, preview }) {
  console.log(morePosts);
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <div className="flex items-center justify-center grid grid-cols-12">
                <div className="col-span-1">
                  <Link as={`/posts/${morePosts[0].slug}`} href="/posts/[slug]">
                    <a>Previous </a>
                  </Link>
                </div>
                <div className="col-span-10">
                  <PostHeader
                    title={post.title}
                    brand={post.brand}
                    coverImage={post.coverImage}
                    vimeoid={post.vimeoid}
                    type={post.type}
                  />
                </div>
                <div className="col-span-1 justify-self-end">
                  <Link as={`/posts/${morePosts[1].slug}`} href="/posts/[slug]">
                    <a>Next </a>
                  </Link>
                </div>
                <div className="col-start-2 col-span-10">
                  <PostBody content={post.content} credits={post.credits} />
                </div>
              </div>
            </article>
            <SectionSeparator />
            {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
