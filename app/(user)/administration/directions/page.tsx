import Link from "next/link";

const Page = () => {
  return (
    <div className={"lt-container-small"}>
      <h1 className={"lt-page-h1"}>მიმართულებები</h1>
      <ol className={"px-10 list-decimal lt-page-ul-ol-padding"}>
        <li className={"hover:text-blue-500"}>
          <Link href={"/administration/directions/cetl-hpep"}>
            პროფესორ-მასწავლებელთა და სტუდენტთა სწავლებასა და სწავლაში
            დახელოვნების ცენტრი CETL. (www.hpep.ge)
          </Link>
        </li>
        <li className={"hover:text-blue-500"}>
          <Link href={"/administration/directions/2"}>
            ეკონომიკის განვითარების ხელშემწყობი საგანმანათლებლო და საექსპერტო
            მიმართულება.
          </Link>
        </li>
        <li className={"hover:text-blue-500"}>
          <Link href={"/administration/directions/3"}>
            სტუ-ს გალერეა „უნივერსი“
          </Link>
        </li>
        <li className={"hover:text-blue-500"}>
          <Link href={"/administration/directions/4"}>სტუ-ს ვიდეო სტუდია.</Link>
        </li>
        <li className={"hover:text-blue-500"}>
          <Link href={"/administration/directions/5"}>
            სტუ-ს NATO-ს სტუდია.
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default Page;
