import Image from "next/image";
import urlFor from "../lib/urlFor";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

type Props = {
  posts: Post[];
};
const BlogList = ({ posts }: Props) => {
  // @ts-ignore
  return (
    <div className={"lt-container"}>
      <hr className={"border-secondary mb-10"} />
      <div
        className={
          "grid grid-cols-1 lg:grid-cols-2 gap-10 gap-y-16 pb-24 px-10"
        }
      >
        {/*Posts*/}
        {posts.map((post) => (
          <div
            // @ts-ignore
            key={post._id}
            className={
              "group cursor-pointer overflow-hidden lg:first:grid-cols-1 lg:first:col-span-full"
            }
          >
            <div
              className={
                "relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out "
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
            <p
              className={
                "mt-5 font-bold flex items-center group-hover:underline"
              }
            >
              Read Post
              <ArrowRightIcon className={"ml-2 h-4 w-4"} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
