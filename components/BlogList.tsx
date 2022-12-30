import Image from "next/image";
import urlFor from "../lib/urlFor";

type Props = {
  posts: Post[];
};
const BlogList = ({ posts }: Props) => {
  // @ts-ignore
  return (
    <div>
      <hr className={"border-secondary mb-10"} />
      <div className={"grid grid-cols-3  gap-4 "}>
        {/*Posts*/}
        {posts.map((post) => (
          <div
            // @ts-ignore
            key={post._id}
            className={
              "group cursor-pointer overflow-hidden first:col-span-3 col-span-1"
            }
          >
            <div
              className={
                "relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out"
              }
            >
              <Image
                className={"object-cover object-left lg:object-center"}
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
              <div
                className={
                  "absolute top-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between"
                }
              >
                <div>
                  <p className={"font-bold"}>{post.title}</p>
                  {new Date(post.publishedAt).toLocaleDateString("ka-GE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>

                {/* Category */}

                <div
                  className={
                    "flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center"
                  }
                >
                  {post.categories.map((category) => (
                    <div
                      className={
                        "bg-primary text-center text-white px-3 py-1 rounded-full text-sm font-semibold"
                      }
                    >
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={"mt-5 flex-1"}>
              <p className={"underline text-lg font-bold"}>{post.title}</p>
              <p className={"line-clamp-2 text-gray-500"}>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
