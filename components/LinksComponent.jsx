import Link from "next/link";

const LinksComponent = () => {
  return (
    <>
      <Link href={"/"} className={"lt-link-classes"}>
        მთავარი
      </Link>
      {/*   ადმინისტრაცია  */}
      <div className="dropdown dropdown-hover lt-link-classes">
        <label tabIndex={0} className="">
          ადმინისტრაცია
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 bg-[#A31E23] w-52 rounded-lg"
        >
          <li>
            <Link href={"/მრჩეველთა-საბჭო"}>მრჩეველთა საბჭო</Link>
          </li>
          <li>
            <Link href={"/მრჩეველთა-კომიტეტი"}>მრჩეველთა კომიტეტი</Link>
          </li>
          <li>
            <Link href={"/კონსულტანტები"}>კონსულტანტები</Link>
          </li>
          <li>
            <Link href={"/ცენტრის-სტუმრები"}>ცენტრის სტუმრები</Link>
          </li>
          <li>
            <Link href={"/მიმართულებები"}>მიმართულებები</Link>
          </li>
        </ul>
      </div>
      {/*   ადმინისტრაცია  */}
      {/*ვორქშოპები*/}

      <div className="dropdown dropdown-hover lt-link-classes">
        <label tabIndex={0} className="">
          ვორქშოპები
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 bg-[#A31E23] w-52 rounded-lg"
        >
          <li>
            <Link href={"/თრენინგები"}>თრენინგები</Link>
          </li>
          <li>
            <Link href={"/სემინარები"}>სემინარები</Link>
          </li>
          <li>
            <Link href={"/აშშ-საზაფხულო-სკოლა"}>აშშ საზაფხულო სკოლა</Link>
          </li>
        </ul>
      </div>

      {/*ვორქშოპები*/}
      {/*პროექტები*/}
      <div className="dropdown dropdown-hover lt-link-classes">
        <label tabIndex={0} className="">
          პროექტები
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 bg-[#A31E23] w-52 rounded-lg"
        >
          <li>
            <Link href={"/მიმდინარე-პროექტები"}>მიმდინარე პროექტები</Link>
          </li>
          <li>
            <Link href={"/დასრულებული-პროექტები"}>დასრულებული პროექტები</Link>
          </li>
        </ul>
      </div>
      {/*პროექტები*/}
      {/*ბიბლიოთეკა*/}

      <div className="dropdown dropdown-hover lt-link-classes">
        <label tabIndex={0} className="">
          ბიბლიოთეკა
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 bg-[#A31E23] w-52 rounded-lg"
        >
          <li>
            <Link href={"/ახალი-სახელმძღვანელოები"}>
              ახალი სახელმძღვანელოები
            </Link>
          </li>
          <li>
            <Link href={"/დამხმარე-მასალები"}>დამხმარე მასალები</Link>
          </li>
          <li>
            <Link href={"/ცენტრის-ბიბლიოთეკა"}>ცენტრის ბიბლიოთეკა</Link>
          </li>
          <li>
            <Link href={"/გალერეა"}>გალერეა</Link>
          </li>
          <li>
            <Link href={"/მემორანდუმები"}>მემორანდუმები</Link>
          </li>
        </ul>
      </div>

      {/*ბიბლიოთეკა*/}
      {/*რესურსები*/}
      <div className="dropdown dropdown-hover lt-link-classes">
        <label tabIndex={0} className="">
          რესურსები
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 bg-[#A31E23] w-52 rounded-lg"
        >
          <li>
            <Link href={"/თანამშრომლები"}>თანამშრომლები</Link>
          </li>
          <li>
            <Link href={"/სასწავლო-ოთახები"}>სასწავლო ოთახები</Link>
          </li>
          <li>
            <Link href={"/გადამზადებული-მასწავლებლები"}>
              გადამზადებული მასწავლებლები
            </Link>
          </li>
          <li>
            <Link href={"/NATO"}>NATO-ს ვიდეო სტუდია</Link>
          </li>
          <li>
            <Link href={"/აპარატურა"}>აპარატურა</Link>
          </li>
        </ul>
      </div>

      {/*რესურსები*/}
      {/*პარტნიორები*/}

      <div className="dropdown dropdown-hover lt-link-classes">
        <label tabIndex={0} className="">
          პარტნიორები
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 bg-[#A31E23] w-52 rounded-lg"
        >
          <li>
            <Link href={"/თანამშრომლები"}>აშშ</Link>
          </li>
          <li>
            <Link href={"/სასწავლო-ოთახები"}>კანადა</Link>
          </li>
          <li>
            <Link href={"/გადამზადებული-მასწავლებლები"}>ევროპა</Link>
          </li>
        </ul>
      </div>
      {/*პარტნიორები*/}
    </>
  );
};

export default LinksComponent;
