import { natoImages } from "../../../../utilities/nato-images";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <head>
        <title>{`NATO-ს ვიდეო სტუდია | HPEP.GE`}</title>
      </head>
      <div className={"lt-container-small"}>
        <h1 className={"lt-page-h1"}>NATO-ს ვიდეო სტუდია</h1>
        <div className={"mx-10"}>
          <p>
            NATO-ს მიერ დაფინანსებული პროექტის
            “ხარჯეფექტური და მდგრადი ქსელისა და ტექნიკური ინფრასტრუქტურის განვითარება საქართველოში” ფარგლებში, ცენტრში შექმნილია სტუდია ვიდეო გაკვეთილების, სემინარებისა და თრენინგების ჩასაწერად.
          </p>
          <div className={"mx-10 grid grid-cols-2 gap-y-8 gap-x-2 pb-10"}>
            {natoImages.map((item, i) => (
              <div>
                <Image
                  src={item.image}
                  alt={"photo"}
                  height={300}
                  width={300}
                  className={"mx-auto object-contain p-2"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
