import { Metadata } from "next";

export const metadata: Metadata = {
  title: "თანამშრომლები",
  description: "თანამშრომლები",
};
// }
// <meta content="width=device-width, initial-scale=1" name="viewport" />
// <link rel="icon" href="/favicon.ico" />
const Page = () => {
  return (
    <>
      <head>
        <title>{`ჩვენი თანამშრომლები | HPEP.GE`}</title>
      </head>
      <div className={"lt-container-small pb-10"}>
        <h1 className={"lt-page-h1 text-2xl"}>ჩვენი თანამშრომლები</h1>
        <div className={"mx-10"}>
          <p>ხუროძე რამაზ – ცენტრის ხელმძღვანელი</p>
          <p>ღოღელიანი ლალი – ცენტრის ხელმძღვანელის მოადგილე</p>
          <p>ბესტავაშვილი ბელა – უფროსი სპეციალისტი (III)</p>
          <p>გელოვანი ეკატერინე – უფროსი სპეციალისტი (III)</p>
          <p>ქეთევან ნაჭყებია – უფროსი სპეციალისტი (II)</p>
          <p>ასანიძე ივერი - უფროსი სპეციალისტი (II)</p>
          <p>ლაშა ტატულაშვილი - უფროსი სპეციალისტი (II)</p>
        </div>
      </div>
    </>
  );
};

export default Page;
