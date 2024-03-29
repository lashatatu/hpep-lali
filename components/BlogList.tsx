import Image from "next/image";
import urlFor from "../lib/urlFor";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};
const BlogList = ({ posts }: Props) => {
  // @ts-ignore
  return (
    <div className={"lt-container"}>
      <h1 className={"lt-page-h1 text-3xl pt-4"}>სიახლეები</h1>
      <div
        className={
          "grid grid-cols-1 gap-10 gap-y-16 px-10 pb-12 lg:grid-cols-2"
        }
      >
        {/*Posts*/}
        {posts.map((post) => (
          <div
            className={
              "rounded-2xl bg-white shadow-xl lg:first:col-span-full lg:first:grid-cols-1"
            }
          >
            <ClientSideRoute
              // @ts-ignore
              key={post._id}
              route={`/post/${post.slug.current}`}
            >
              <div
                // @ts-ignore
                key={post._id}
                className={"group cursor-pointer overflow-hidden p-4"}
              >
                <div
                  className={
                    "relative h-80 w-full drop-shadow-xl"
                  }
                >
                  <Image
                    className={"object-cover object-left lg:object-center"}
                    src={urlFor(post.mainImage).url()}
                    alt={post.author.name}
                    fill
                    sizes={"(min-width: 1024px) 50vw, 100vw"}
                  />
                  <div
                    className={
                      "absolute top-0 flex w-full justify-between rounded bg-black bg-opacity-20 p-5 text-white drop-shadow-lg backdrop-blur-lg"
                    }
                  >
                    <div>
                      <p className={"indent-0 font-bold"}>{post.title}</p>
                      {new Date(post.publishedAt).toLocaleDateString("ka-GE", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>

                    {/* Category */}

                    <div
                      className={
                        "flex flex-col items-center gap-y-2 md:flex-row md:gap-x-2"
                      }
                    >
                      {post.categories.map((category) => (
                        <div
                          className={
                            "rounded-full bg-primary px-3 py-1 text-center text-center text-sm font-semibold text-white"
                          }
                        >
                          <p className={"pb-0 indent-0"}>{category.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={"mt-5 flex-1"}>
                  <p className={"text-lg font-bold underline"}>{post.title}</p>
                  <p className={"text-gray-500 line-clamp-2"}>
                    {post.description}
                  </p>
                </div>
                <p
                  className={
                    "mt-5 flex items-center font-bold group-hover:underline"
                  }
                >
                  იხილეთ მეტი
                  <ArrowRightIcon className={"ml-2 h-4 w-4"} />
                </p>
              </div>
            </ClientSideRoute>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
