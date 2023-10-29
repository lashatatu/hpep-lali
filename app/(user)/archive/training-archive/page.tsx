import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import BlogList from "../../../../components/BlogList";

const query = groq`
  *[_type == "post" && references(*[_type=="category" && title=="თრენინგები"]._id)]{
  ...,
  author->,
  categories[]->
} | order(publishedAt desc)
`;
export const revalidate = 60;

const Page = async () => {
  const posts = await client.fetch(query);
  return (
    <div>
      <h1 className={'lt-page-h1'}>თრენინგების არქივი</h1>
      <BlogList posts={posts} />
    </div>
  );
};

export default Page
