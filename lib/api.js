import client, { previewClient } from "./sanity";
import groq from "groq";

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
  'coverImageWork': coverImageWork.asset->{...},
  'author': author->{name, 'picture': picture.asset->url},
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

const homepageQuery = groq`*[_type == "homepage"]{
  _id,
  text,
  featuredReels,
  "featuredWork": featuredWork[]->
}[0]`;

export async function getTestData() {
  const data = await client.fetch(homepageQuery);
  return data;
}

export async function getCovidPage(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "covid"]{
      _id,
      pageTitle,
      covidContent,
      imageGallery,
      enableBanner,
      covidBannerText
    }[0]`
  );
  return data;
}

const talentSettingsQuery = groq`*[_type == "talentPageSettings"]{
  _id,
  talentSettingsHeadline,
  talentSettingsSubtitle,
  talentSettingsImage
}`;

export async function getAllTalentSettingsData() {
  const data = await getClient(true).fetch(talentSettingsQuery);
  return data;
}

const talentQuery = groq`*[_type == "talent"] | order( orderRank asc ){
  _id,
  talentName,
  talentTitle,
  talentDescription,
  slug
}`;


export async function getAllTalentData() {
  const data = await getClient(true).fetch(talentQuery);
  return data;
}

export async function getSingleTalentData(slug) {
  const data = await getClient(true).fetch(
    `*[_type=="talent" && slug.current == $slug ]{
      talentName,
      talentTitle,
      talentDescription,
      "projects": *[_type=='post' && references(^._id)]{ ${postFields} }
    }`,
    {
      slug,
    }
  );
  return data;
}

const workQuery = groq`*[_type == "workpage"]{
  _id,
  pageTitle,
  "allWork": allWork[]->
}[0]`;

export async function getWorkData(slug) {
  const data = await getClient(true).fetch(workQuery);
  return data;
}

export async function getAboutData(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "about"]{
      _id,
      pageTitle,
      slug,
      aboutSectionTitle,
      illo,
      aboutContent,
      imageGallery,
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
      items,
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
