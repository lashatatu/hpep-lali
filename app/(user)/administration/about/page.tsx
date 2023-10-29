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
      title: "აკადემიური და მასწავლებელთა პერსონალის განვითარების ცენტრის დებულება",
      link: "/pdf/debuleba.pdf",
    },
    {
      title: "სსიპ საქართველოს ტექნიკური უნივერსიტეტის რექტორის ბრძანება პერსონალის განვითარების შესახებ",
      link: "/pdf/GTU-personal-training-order.pdf",
    },
    {
      title: "აკადემიური და მასწავლებელთა პერსონალის განვითარების ცენტრის თანამშრომელთა საქმიანობის აღწერა",
      link: "/pdf/GTU-CETL-colegues-job-description.pdf",
    },
    {
      title: "საქართველოს ტექნიკური უნივერსიტეტის პერსონალის კვზლიფიკაციის ამაღლების წესი",
      link: "/pdf/GTU-qualification-update-guide.pdf",
    },
    {
      title: "კადემიური და მასწავლებელთა პერსონალის განვითარების ცენტრის საქმიანობის აღწერა",
      link: "/pdf/CETL-work-description.pdf",
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
