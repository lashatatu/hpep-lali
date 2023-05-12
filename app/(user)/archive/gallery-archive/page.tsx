import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import BlogList from "../../../../components/BlogList";

const query = groq`
  *[_type == "post" && references(*[_type=="category" && title=="გალერეა"]._id)]{
  ...,
  author->,
  categories[]->
} | order(publishedAt desc)
`;

const Page = async () => {
  const posts = await client.fetch(query);
  return (
    <div>
      <h1 className={'lt-page-h1'}>გალერიის არქივი</h1>
      <BlogList posts={posts} />
    </div>
  );
};

export default Page
