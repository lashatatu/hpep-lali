// @ts-ignore
const DocumentLink = ({ number, title, link }) => {
  return (
    <div className="mb-2 flex items-center">
      <div className="mr-2 font-bold">{number}.</div>
      <a
        href={link}
        className="px-4 py-2 text-black hover:bg-red-800 hover:text-white hover:rounded-r-full"
        target={"_blank"}
      >
        {title}
      </a>
    </div>
  );
};

const Page = () => {
  const documents = [
    {
      title: "აკადემიური პერსონალის განვითარების ცენტრის დებულება",
      link: "http://science.org.ge/old/moambe/5-2/5-10%20Boyarsky.pdf",
    },
    {
      title: "ბრძანება ს.ტ.უ.-ს პერსონალის პროფესიული განვითარების შესახებ",
      link: "http://science.org.ge/old/moambe/5-2/5-10%20Boyarsky.pdf",
    },
    {
      title: "პროფესიული განვითარების ცენტრის თანამშრომელთა საქმიანობის აღწერა",
      link: "http://science.org.ge/old/moambe/5-2/5-10%20Boyarsky.pdf",
    },
    {
      title: "ს.ტ.უ-ს პერსონალის კვალიფიკაციის ამაღლების წესი",
      link: "http://science.org.ge/old/moambe/5-2/5-10%20Boyarsky.pdf",
    },
    {
      title: "ცენტრის  საშტატო განრიგი",
      link: "http://science.org.ge/old/moambe/5-2/5-10%20Boyarsky.pdf",
    },
    {
      title: "ცენტრის საქმიანობის აღწერა ",
      link: "http://science.org.ge/old/moambe/5-2/5-10%20Boyarsky.pdf",
    },
  ];
  return (
    <>
      <head>
        <title>{`ჩვენს შესახებ | HPEP.GE`}</title>
      </head>
      <div>
        <h2 className="bg-primary p-2 text-center text-white">
          აკადემიური და მასწავლებეთა პერსონალის განვითარების ცენტრი
        </h2>
      </div>
      <div className={"lt-container-small pt-5"}>
        <div className="pb-10 text-left">
          <img src="/blackLOGO.png" className="mx-auto h-24 w-24" alt="logo" />

          <h4 className={"py-10"}>
            ცენტრის შესახებ ინფორმაციის მისაღებად, გთხოვთ გაეცნოთ ქვემოთ მოცემულ
            დოკუმენტაციას
          </h4>

          <div className="flex flex-col space-y-2">
            {documents.map((doc, index) => (
              <DocumentLink
                key={index}
                number={index + 1}
                title={doc.title}
                link={doc.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
