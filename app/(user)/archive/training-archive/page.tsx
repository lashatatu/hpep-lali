import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import BlogList from "../../../../components/BlogList";

const query = groq`
  *[_type == "post" && references(*[_type=="category" && title=="ტრენინგები"]._id)]{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

const Page = async () => {
  const posts = await client.fetch(query);
  return (
    <div>
      <h1 className={'lt-page-h1'}>ტრენინგების არქივი</h1>
      <BlogList posts={posts} />
    </div>
  );
};

export default Page
