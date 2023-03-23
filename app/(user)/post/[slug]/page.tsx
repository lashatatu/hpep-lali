import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[_type=="post"]{slug}`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({ slug }));
}

async function PostPage({ params: { slug } }: Props) {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->
  }
  `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className={"lt-container px-10 pb-28 pt-8"}>
      <section
        className={"content-center space-y-2 border border-primary text-white"}
      >
        <div
          className={
            "min-h-56 relative flex flex-col justify-between lg:flex-row"
          }
        >
          <div
            className={"absolute top-0 h-full w-full p-10 opacity-10 blur-sm"}
          >
            <Image
              className={"mx-auto object-cover object-center"}
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <section className={"bg-primary p-5 w-full"}>
            <div
              className={"flex flex-col justify-between gap-y-5 lg:flex-row"}
            >
              <div>
                <h1 className={"pb-8 text-4xl font-extrabold"}>{post.title}</h1>
                <p>
                  {new Date(post.publishedAt).toLocaleDateString("ka-GE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className={"flex items-center space-x-2"}>
                <Image
                  className={"rounded-full"}
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />
                <div className={"w-64 "}>
                  <h3 className={"text-lg font-bold"}>{post.author.name}</h3>
                  <div>{/*tood*/}</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className={"pt-10 italic"}>{post.description}</h2>
              <div
                className={"mt-auto flex items-center justify-end space-x-2"}
              >
                {post.categories.map((category) => (
                  <p
                    // @ts-ignore
                    key={category._id}
                    className={
                      "mt-4 rounded-full bg-gray-800 px-3 py-1 text-sm font-semibold indent-0 text-white"
                    }
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}

export default PostPage;
