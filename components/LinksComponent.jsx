import Link from "next/link";

const LinksComponent = () => {
  return (
    <>
      <Link href={"/"} className={"lt-link-classes"}>
        მთავარი
      </Link>
      {/*   administration  */}
      <div className="lt-link-classes dropdown dropdown-hover">
        <label tabIndex={0} className="">
          ადმინისტრაცია
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu w-52 rounded-lg bg-primary p-2"
        >
          <li>
            <Link href={"/administration/advisory-board"}>მრჩეველთა საბჭო</Link>
          </li>
          <li>
            <Link href={"/administration/advisory-committee"}>
              მრჩეველთა კომიტეტი
            </Link>
          </li>
          <li>
            <Link href={"/administration/consultants"}>კონსულტანტები</Link>
          </li>
          <li>
            <Link href={"/administration/guests-of-the-center"}>
              ცენტრის სტუმრები
            </Link>
          </li>
          <li>
            <Link href={"/administration/directions"}>მიმართულებები</Link>
          </li>
        </ul>
      </div>
      {/*   administration  */}
      {/*ვორქშოპები*/}

      <div className="dropdown-hover lt-link-classes dropdown">
        <label tabIndex={0} className="">
          ვორქშოპები
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu w-52 rounded-lg bg-primary p-2"
        >
          <li>
            <Link href={"/workshops/trainings"}>თრენინგები</Link>
          </li>
          <li>
            <Link href={"/workshops/seminars"}>სემინარები</Link>
          </li>
          <li>
            <Link href={"/workshops/us-summer-school"}>
              აშშ საზაფხულო სკოლა
            </Link>
          </li>
        </ul>
      </div>

      {/*ვორქშოპები*/}
      {/*პროექტები*/}
      <div className="dropdown-hover lt-link-classes dropdown">
        <label tabIndex={0} className="">
          პროექტები
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu w-52 rounded-lg bg-primary p-2"
        >
          <li>
            <Link href={"/projects/current-projects"}>მიმდინარე პროექტები</Link>
          </li>
          <li>
            <Link href={"/projects/finished-projects"}>
              დასრულებული პროექტები
            </Link>
          </li>
        </ul>
      </div>
      {/*პროექტები*/}
      {/*ბიბლიოთეკა*/}

      <div className="dropdown-hover lt-link-classes dropdown">
        <label tabIndex={0} className="">
          ბიბლიოთეკა
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu w-52 rounded-lg bg-primary p-2"
        >
          <li>
            <Link href={"/library/new-textbooks"}>ახალი სახელმძღვანელოები</Link>
          </li>
          <li>
            <Link href={"/library/supporting-materials"}>
              დამხმარე მასალები
            </Link>
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
      <div className="dropdown-hover lt-link-classes dropdown">
        <label tabIndex={0} className="">
          რესურსები
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu w-52 rounded-lg bg-primary p-2"
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
            <Link href={"/resources/NATO-video-studio"}>
              NATO-ს ვიდეო სტუდია
            </Link>
          </li>
          <li>
            <Link href={"/library/gallery"}>
              გალერეა
            </Link>
          </li>
        </ul>
      </div>

      {/*რესურსები*/}
      {/* პარტნიორები */}

      <div className="dropdown-hover lt-link-classes dropdown">
        <Link href={"/partners"}>პარტნიორები</Link>
      </div>

      {/* პარტნიორები */}
      {/* გალერეა */}

      <div className="collapse min-h-0">
        <Link href={"/resources/gallery-universe"} className="p-2 text-center">
          გალერეა უნივერსი
        </Link>
      </div>

      {/* გალერეა */}
    </>
  );
};

export default LinksComponent;
