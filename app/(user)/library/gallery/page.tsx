import { images } from "../../../../utilities/photos";
import Image from "next/image";

const Page = () => {
  return (
    <div className={"lt-container-small"}>
      <h1 className={"lt-page-h1"}>გალერეა</h1>
      <div className={"grid grid-cols-4 gap-y-8 gap-x-2"}>
        {images.map((e, index) => (
          <div className={"border-2 rounded-3xl"}>
            <p className={"indent-0 text-primary text-center p-2"}>{e.text}</p>
            <div>
              <Image
                key={index}
                // @ts-ignore
                src={e.image}
                alt={e.text}
                className={'mx-auto object-bottom'}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
