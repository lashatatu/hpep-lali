import Hero from "../../components/Hero.jsx";
import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
import PartnersLanding from "../../components/PartnersLanding";
//write groq query of posts and filter by category title schema

const query = groq`
  *[_type == "post" && references(*[_type=="category" && title=="ტრენინგები"]._id)]{
    ...,
    author->,
    categories[]->
  } | order(publishedAt desc) [0..9]
`;


// this filters posts by category title schema

//   *[_type == "post" && references(*[_type=="category" && title!='test']._id)]{
//   ...,
//   author->,
//   categories[]->
// } | order(_createdAt desc)
export const revalidate = 60;


export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role={"status"}>
            <p className={"animate-pulse text-center text-lg"}>Loading...</p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return (
    <>
      <div>
        <Hero />
        <BlogList posts={posts} />
        <PartnersLanding />
      </div>
    </>
  );
}
