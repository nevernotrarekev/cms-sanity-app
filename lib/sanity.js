import sanityClient from "@sanity/client";
import sanityImage from "@sanity/image-url";

const options = {
  dataset: "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: false,
};

const client = sanityClient(options);

// auto=format serves WebP/AVIF to browsers that support it
export const imageBuilder = sanityImage(client).auto("format").quality(75);

export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export default client;
