import Hero from "../../components/Hero.jsx";
import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
import PartnersLanding from "../../components/PartnersLanding";
import Link from "next/link";
import Header from "../../components/Header";
import LinksComponent from "../../components/LinksComponent";
import Colegues from '../../components/Colegues'
//write groq query of posts and filter by category title schema

const query = groq`
  *[_type == "post" && references(*[_type=="category" && title=="ტრენინგები"]._id)]{
    ...,
    author->,
    categories[]->
  } | order(publishedAt desc) [0..8]
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
        <div className="flex items-center justify-center h-screen flex-col bg-gray-200">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 pb-16">Under Construction</h1>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">მიმდინარეობს საიტის რეკონსტრუქცია</h1>
          <hr/>
        </div>
        მიმდინარეობს
        {/*<Header />*/}
        {/*<div className={"flex h-screen flex-col"}>*/}
        {/*  <Hero />*/}
        {/*</div>*/}
        {/*<Colegues/>*/}
        {/*<BlogList posts={posts} />*/}
        {/*<div className={"hero-content mx-auto pb-12 text-center text-white"}>*/}
        {/*  <Link*/}
        {/*    href={"/archive/training-archive"}*/}
        {/*    target="_blank"*/}
        {/*    className="btn font-bold"*/}
        {/*  >*/}
        {/*    ტრენინგების არქივი*/}
        {/*  </Link>*/}
        {/*</div>*/}
        {/*<PartnersLanding />*/}
      </div>
    </>
  );
}
