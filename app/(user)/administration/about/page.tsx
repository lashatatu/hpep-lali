// @ts-ignore
const DocumentLink = ({ number, title, link }) => {
  return (
    <div className="flex items-center mb-2">
      <div className="font-bold mr-2">{number}.</div>
      <a
        href={link}
        className="text-black px-4 py-2 hover:bg-red-800 hover:text-white"
        target={'_blank'}
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
        <h2 className="text-white bg-primary p-2 text-center">
          აკადემიური და მასწავლებეთა პერსონალის განვითარების ცენტრი
        </h2>
      </div>
      <div className={'lt-container-small'}>
        <div className="text-left">
          <img src="/blackLOGO.png" className="h-24 w-24 mx-auto" alt="logo" />

          <h4>
            ცენტრის შესახებ ინფორმაციის მისაღებად, გთხოვთ გაეცნოთ ქვემოთ მოცემულ დოკუმენტაციას
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
