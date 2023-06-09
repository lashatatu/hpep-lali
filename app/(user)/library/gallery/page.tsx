import { images } from "../../../../utilities/photos";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <head>
        <title>{`ფოტო გალერეა | HPEP.GE`}</title>
      </head>
      <div className={"lt-container-small"}>
        <h1 className={"lt-page-h1"}>ფოტო გალერეა</h1>
        <div className={"grid grid-cols-4 gap-y-8 gap-x-2"}>
          {images.map((e, index) => (
            <div className={"rounded-3xl border-2"}>
              <p className={"p-2 text-center indent-0 text-primary"}>
                {e.text}
              </p>
              <div>
                <Image
                  key={index}
                  // @ts-ignore
                  src={e.image}
                  alt={e.text}
                  className={"mx-auto object-bottom"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
