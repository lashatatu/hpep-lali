import {
  artists,
  colleagues,
  kids,
} from "../../../../utilities/gallery-universe";
import Image from "next/image";
import { exhibitions } from "./data/data";
import { groq } from "next-sanity";
import {client} from '../../../../lib/sanity.client'
import BlogList from '../../../../components/BlogList'
import Link from 'next/link'

const query = groq`
  *[_type == "post" && references(*[_type=="category" && title=="გალერეა"]._id)]{
  ...,
  author->,
  categories[]->
} | order(publishedAt desc) [0..8]
`;
const Page = async () => {

  const posts = await client.fetch(query);

  return (
    <div className={"lt-container-small"}>
      <h1 className={"lt-page-h1"}>გალერეა უნივერსი</h1>
      <BlogList posts={posts} />
      <div className={"hero-content text-center text-white mx-auto pb-12"}>
        <Link href={"/archive/gallery-archive"} target="_blank" className="btn font-bold">გალერიის არქივი</Link>
      </div>
      <div className={"mx-10"}>
        <div>
          <h2 className={"lt-page-h2 pl-0 text-center"}>
            პროფესიონალი მხატვრების გამოფენები
          </h2>
          <div className={"grid grid-cols-4 gap-y-8 gap-x-2 pb-16"}>
            {artists.map((artist, index) => (
              <div
                className={
                  "flex h-max flex-col justify-between overflow-hidden rounded-3xl border-2"
                }
              >
                <p className={"p-2 text-center indent-0 text-primary"}>
                  {artist.description}
                </p>
                <div>
                  <Image
                    key={index}
                    // @ts-ignore
                    src={artist.image}
                    alt={artist.description}
                    className={"mx-auto object-bottom"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={"mx-10"}>
        <div>
          <h2 className={"lt-page-h2 pl-0 text-center"}>
            ბავშვების გამოფენები
          </h2>
          <div className={"grid grid-cols-4 gap-y-8 gap-x-2 pb-16"}>
            {kids.map((kid, index) => (
              <div
                className={
                  "flex h-max flex-col justify-between overflow-hidden rounded-3xl border-2"
                }
              >
                <p className={"p-2 text-center indent-0 text-primary"}>
                  {kid.description}
                </p>
                <div>
                  <Image
                    key={index}
                    // @ts-ignore
                    src={kid.image}
                    alt={kid.description}
                    className={"mx-auto object-bottom"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={"mx-10"}>
        <div>
          <h2 className={"lt-page-h2 pl-0 text-center"}>
            ტექნიკური უნივერსიტეტის თანამშრომლების გამოფენები
          </h2>
          <div className={"grid grid-cols-4 gap-y-8 gap-x-2 pb-16"}>
            {colleagues.map((colleague, index) => (
              <div
                className={
                  "flex h-max flex-col justify-between overflow-hidden rounded-3xl border-2"
                }
              >
                <p className={"p-2 text-center indent-0 text-primary"}>
                  {colleague.description}
                </p>
                <div>
                  <Image
                    key={index}
                    // @ts-ignore
                    src={colleague.image}
                    alt={colleague.description}
                    className={"mx-auto object-bottom"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={"mx-10"}>
        <div>
          <h2 className={"lt-page-h2 pl-0 text-center"}>
            გალერეა უნივერსში განხორციელებული გამოფენების ჩამონათვალი
          </h2>
          {exhibitions.map((exhibition, index) => (
            <div>
              <p className={"indent-0"}>
                {index + 1}. {exhibition}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
