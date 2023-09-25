import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className={"relative m-10 mx-auto h-96 w-full"}>
          <Image
            className={"object-contain"}
            src={urlFor(value).url()}
            alt={"blog post image"}
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className={"ml-10 list-disc space-y-5 py-5"}>{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className={"ml-8 list-decimal space-y-5"}>{children}</ol>
    ),
  },
  block: {
    normal: ({ children }: any) => (
      <p className={"pb-4 indent-4"}>{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className={"py-10 text-5xl font-extrabold"}>{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className={"py-10 text-4xl font-extrabold"}>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className={"py-10 text-3xl font-extrabold"}>{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className={"py-10 text-2xl font-extrabold"}>{children}</h4>
    ),
    blockquote: ({ children }: any) => {
      return (
        <blockquote className={"my-5 border-l-4 border-secondary py-5 pl-5"}>
          {children}
        </blockquote>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noopener noreferrer"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className={"underline decoration-primary hover:decoration-black"}
        >
          {children}
        </Link>
      );
    },
  },
};
