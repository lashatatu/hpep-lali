import Link from "next/link";

const LinksComponentMobile = () => {
  return (
    <>
      <Link href={"/"} className={"lt-link-classes"}>
        მთავარი
      </Link>
      {/*   administration  */}
      <div className="collapse min-h-0">
        <input type="checkbox" className={"min-h-0"} />
        <div className="collapse-title min-h-0 p-2 text-center">
          ადმინისტრაცია
        </div>
        <ul className="collapse-content rounded-3xl bg-third text-center">
          <li className={"pt-2"}>
            <Link href={"/administration/advisory-board"}>მრჩეველთა საბჭო</Link>
          </li>
          <li className={"pt-2"}>
            <Link href={"/administration/advisory-committee"}>
              მრჩეველთა კომიტეტი
            </Link>
          </li>
          <li className={"pt-2"}>
            <Link href={"/administration/consultants"}>კონსულტანტები</Link>
          </li>
          <li className={"pt-2"}>
            <Link href={"/administration/guests-of-the-center"}>
              ცენტრის სტუმრები
            </Link>
          </li>
          <li className={"pt-2"}>
            <Link href={"/administration/directions"}>მიმართულებები</Link>
          </li>
        </ul>
      </div>
      {/*   administration  */}
      {/*ვორქშოპები*/}

      <div className="collapse min-h-0">
        <input type="checkbox" className={"min-h-0"} />
        <div className="collapse-title min-h-0 p-2 text-center">ვორქშოპები</div>
        <ul className="collapse-content rounded-3xl bg-third text-center">
          <li className={"pt-2"}>
            <Link href={"/workshops/trainings"}>თრენინგები</Link>
          </li>
          <li className={"pt-2"}>
            <Link href={"/workshops/seminars"}>სემინარები</Link>
          </li>
          <li className={"pt-2"}>
            <Link href={"/workshops/us-summer-school"}>
              აშშ საზაფხულო სკოლა
            </Link>
          </li>
        </ul>
      </div>

      {/*ვორქშოპები*/}
      {/*პროექტები*/}
      <div className="collapse min-h-0">
        <input type="checkbox" className={"min-h-0"} />
        <div className="collapse-title min-h-0 p-2 text-center">პროექტები</div>
        <ul className="collapse-content rounded-3xl bg-third text-center">
          <li className={"pt-2"}>
            <Link href={"/projects/current-projects"}>მიმდინარე პროექტები</Link>
          </li>
          <li className={"pt-2"}>
            <Link href={"/projects/finished-projects"}>
              დასრულებული პროექტები
            </Link>
          </li>
        </ul>
      </div>
      {/*პროექტები*/}
      {/*ბიბლიოთეკა*/}

      <div className="collapse min-h-0">
        <input type="checkbox" className={"min-h-0"} />
        <div className="collapse-title min-h-0 p-2 text-center">ბიბლიოთეკა</div>
        <ul className="collapse-content rounded-3xl bg-third text-center">
          <li className={"pt-2"}>
            <Link href={"/library/new-textbooks"}>ახალი სახელმძღვანელოები</Link>
          </li>
          <li className={"pt-2"}>
            <Link href={"/library/supporting-materials"}>
              დამხმარე მასალები
            </Link>
          </li>
          <li className={"pt-2"}>
            <Link href={"/library/center-library"}>ცენტრის ბიბლიოთეკა</Link>
          </li>
          <li className={"pt-2"}>
            <Link href={"/library/memorandums"}>მემორანდუმები</Link>
          </li>
        </ul>
      </div>

      {/*ბიბლიოთეკა*/}
      {/*რესურსები*/}

      <div className="collapse min-h-0">
        <input type="checkbox" className={"min-h-0"} />
        <div className="collapse-title min-h-0 p-2 text-center">რესურსები</div>
        <ul className="collapse-content rounded-3xl bg-third text-center">
          <li className={"pt-2"}>
            <Link href={"/resources/employees"}>თანამშრომლები</Link>
          </li>
          <li>
            <Link href={"/resources/study-rooms"}>სასწავლო ოთახები</Link>
          </li>
          <li className={"pt-2"}>
            <Link href={"/resources/trained-teachers"}>
              გადამზადებული მასწავლებლები
            </Link>
          </li>
          <li className={"pt-2"}>
            <Link href={"/resources/NATO-video-studio"}>
              NATO-ს ვიდეო სტუდია
            </Link>
          </li>
          <li>
            <Link href={"/resources/gallery-universe"}>
              გალერეა უნივერსი
            </Link>
          </li>
        </ul>
      </div>
      {/*რესურსები*/}
      {/* პარტნიორები */}

      <div className="collapse min-h-0">
        <Link href={"/partners"} className="p-2 text-center ">
          პარტნიორები
        </Link>
      </div>
      {/* პარტნიორები */}
      {/* გალერეა */}
      <div className="collapse min-h-0">
        <Link href={"/library/gallery"} className="p-2 text-center">
          გალერეა
        </Link>
      </div>
      {/* გალერეა */}
    </>
  );
};

export default LinksComponentMobile;
