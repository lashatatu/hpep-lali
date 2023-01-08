import Link from "next/link";

const LinksComponent = () => {
  return (
    <>
      <Link href={"/"} className={"lt-link-classes"}>
        მთავარი
      </Link>
      {/*   administration  */}
      <div className="dropdown dropdown-hover lt-link-classes">
        <label tabIndex={0} className="">
          ადმინისტრაცია
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 bg-primary w-52 rounded-lg"
        >
          <li>
            <Link href={"/administration/advisory-board"}>მრჩეველთა საბჭო</Link>
          </li>
          <li>
            <Link href={"/administration/advisory-committee"}>მრჩეველთა კომიტეტი</Link>
          </li>
          <li>
            <Link href={"/administration/consultants"}>კონსულტანტები</Link>
          </li>
          <li>
            <Link href={"/administration/guests-of-the-center"}>ცენტრის სტუმრები</Link>
          </li>
          <li>
            <Link href={"/administration/directions"}>მიმართულებები</Link>
          </li>
        </ul>
      </div>
      {/*   administration  */}
      {/*ვორქშოპები*/}

      <div className="dropdown dropdown-hover lt-link-classes">
        <label tabIndex={0} className="">
          ვორქშოპები
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 bg-primary w-52 rounded-lg"
        >
          <li>
            <Link href={"/workshops/trainings"}>თრენინგები</Link>
          </li>
          <li>
            <Link href={"/workshops/seminars"}>სემინარები</Link>
          </li>
          <li>
            <Link href={"/workshops/us-summer-school"}>აშშ საზაფხულო სკოლა</Link>
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
          className="dropdown-content menu p-2 bg-primary w-52 rounded-lg"
        >
          <li>
            <Link href={"/projects/current-projects"}>მიმდინარე პროექტები</Link>
          </li>
          <li>
            <Link href={"/projects/finished-projects"}>დასრულებული პროექტები</Link>
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
          className="dropdown-content menu p-2 bg-primary w-52 rounded-lg"
        >
          <li>
            <Link href={"/library/new-textbooks"}>
              ახალი სახელმძღვანელოები
            </Link>
          </li>
          <li>
            <Link href={"/library/supporting-materials"}>დამხმარე მასალები</Link>
          </li>
          <li>
            <Link href={"/library/center-library"}>ცენტრის ბიბლიოთეკა</Link>
          </li>
          <li>
            <Link href={"/library/gallery"}>გალერეა</Link>
          </li>
          <li>
            <Link href={"/library/memorandums"}>მემორანდუმები</Link>
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
          className="dropdown-content menu p-2 bg-primary w-52 rounded-lg"
        >
          <li>
            <Link href={"/resources/employees"}>თანამშრომლები</Link>
          </li>
          <li>
            <Link href={"/resources/study-rooms"}>სასწავლო ოთახები</Link>
          </li>
          <li>
            <Link href={"/resources/trained-teachers"}>
              გადამზადებული მასწავლებლები
            </Link>
          </li>
          <li>
            <Link href={"/resources/NATO-video-studio"}>NATO-ს ვიდეო სტუდია</Link>
          </li>
          <li>
            <Link href={"/resources/equipment"}>აპარატურა</Link>
          </li>
        </ul>
      </div>

      {/*რესურსები*/}
      {/* პარტნიორები */}

      <div className="dropdown dropdown-hover lt-link-classes">
        <label tabIndex={0} className="">
          პარტნიორები
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 bg-primary w-52 rounded-lg"
        >
          <li>
            <Link href={"/partners/usa"}>აშშ</Link>
          </li>
          <li>
            <Link href={"/partners/canada"}>კანადა</Link>
          </li>
          <li>
            <Link href={"/partners/eu"}>ევროპა</Link>
          </li>
        </ul>
      </div>

      {/* პარტნიორები */}
    </>
  );
};

export default LinksComponent;
