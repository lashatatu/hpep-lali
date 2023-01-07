import Hero from "../../components/Hero.jsx";
import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";


//write groq query of posts and filter by category title schema





const query = groq`
  *[_type == "post"]{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

// this filters posts by category title schema

//   *[_type == "post" && references(*[_type=="category" && title!='test']._id)]{
//   ...,
//   author->,
//   categories[]->
// } | order(_createdAt desc)

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role={"status"}>
            <p className={"text-center text-lg animate-pulse"}>Loading...</p>
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
      </div>
    </>
  );
}
