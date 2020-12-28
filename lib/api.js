import client, { previewClient } from "./sanity";

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const postFields = `
  name,
  title,
  brand,
  vimeoid,
  type,
  date,
  excerpt,
  'slug': slug.current,
  'coverImage': coverImage.asset->{...},
  'author': author->{name, 'picture': picture.asset->url},
`;

const homeFields = `
  _id,
  text,
  illo: illo.asset->{url},
  slug
`;

const getClient = (preview) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(date desc){
      ${postFields}
      content,
      credits,
    }`,
    { slug }
  );
  return data[0];
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
  return data;
}

export async function getPageData(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "home" && slug.current == '/']{
      _id,
      text,
      illo,
      featuredReels
    }[0]`
  );
  return data;
}

export async function getAboutData(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "about"]{
      _id,
      pageTitle,
      slug,
      aboutSectionTitle,
      aboutContent,
      imageGallery,
      aboutImage,
      aboutImage2,
      aboutImage3,
      subsection1Title,
      subsection1Content,
      subsection2Title,
      subsection2Content,
    }[0]`
  );
  return data;
}

export async function getPlayData(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "play"]{
      _id,
      pageTitle,
      slug,
			'items': items[]->{playImage{asset->{path,url}}, vimeoid},
    }[0]`
  );
  return data;
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(date desc, _updatedAt desc){
      ${postFields}
    }`);
  return getUniquePosts(results);
}

export async function getFeatured(preview) {
  const results = await getClient(preview).fetch(`*[_type == "featuredItem"]{
      vimeoid,
      title
    }`);
  return results;
}

export async function getAllPostsForPlay(preview) {
  const data = await getClient(preview)
    .fetch(`*[_type == "playitem"] | order(_createdAt asc){
      vimeoid,
      playImage,
    }`);
  return data;
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        content,
        credits,
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc){
        ${postFields}
        content,
        credits
      }[0...2]`,
      { slug }
    ),
  ]);
  return { post, morePosts: getUniquePosts(morePosts) };
}
