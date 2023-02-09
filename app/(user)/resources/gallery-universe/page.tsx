import {
  artists,
  colleagues,
  kids,
} from "../../../../utilities/gallery-universe";
import Image from "next/image";

const Page = () => {
  return (
    <div className={"lt-container-small"}>
      <h1 className={"lt-page-h1"}>გალერეა უნივერსი</h1>
      <div className={"mx-10"}>
        <div>
          <h2 className={"lt-page-h2 pl-0 text-center"}>
            ბავშვების ნამუშევრები
          </h2>
          <div className={"grid grid-cols-4 gap-y-8 gap-x-2 pb-16"}>
            {kids.map((kid, index) => (
              <div
                className={
                  "flex flex-col justify-between overflow-hidden rounded-3xl border-2"
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
            ბავშვების ნამუშევრები
          </h2>
          <div className={"grid grid-cols-4 gap-y-8 gap-x-2 pb-16"}>
            {kids.map((kid, index) => (
              <div
                className={
                  "flex h-max flex-col overflow-hidden rounded-3xl border-2"
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
            ხელოვნების გამოფენები
          </h2>
          <div className={"grid grid-cols-4 gap-y-8 gap-x-2 pb-16"}>
            {artists.map((artist, index) => (
              <div
                className={
                  "flex flex-col justify-between overflow-hidden rounded-3xl border-2"
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
            კოლეგების გამოფენები
          </h2>
          <div className={"grid grid-cols-4 gap-y-8 gap-x-2 pb-16"}>
            {colleagues.map((colleague, index) => (
              <div
                className={
                  "flex flex-col justify-between overflow-hidden rounded-3xl border-2"
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
    </div>
  );
};

export default Page;
