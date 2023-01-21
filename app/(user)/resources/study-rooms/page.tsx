import { classroomImages } from "../../../../utilities/classroom-images";
import Image from "next/image";
const Page = () => {

  return (
    <div className={"lt-container-small"}>
      <h1 className={"lt-page-h1"}>სასწავლო ოთახები</h1>
      <div className={"grid grid-cols-2 gap-y-8 gap-x-2 mx-10"}>
        {classroomImages.map((item, i) => (
          <div className={'border-2'}>
            <Image
              // @ts-ignore
              key={i}
              src={item.image}
              alt={"photo"}
              className={'mx-auto object-bottom p-2'}
              height={200}
              width={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
