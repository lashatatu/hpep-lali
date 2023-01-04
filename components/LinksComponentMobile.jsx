import Link from "next/link";

const LinksComponentMobile = () => {
  return (
    <>
      <Link href={"/"} className={"lt-link-classes"}>
        მთავარი
      </Link>
      {/*   ადმინისტრაცია  */}
      <div className="collapse min-h-0">
        <input type="checkbox" className={'min-h-0'}/>
        <div className="collapse-title text-center p-2 min-h-0">ადმინისტრაცია</div>
        <ul className="collapse-content text-center bg-third rounded-3xl">
          <li className={'pt-2'}>
            <Link href={"/მრჩეველთა-საბჭო"}>მრჩეველთა საბჭო</Link>
          </li>
          <li className={'pt-2'}>
            <Link href={"/მრჩეველთა-კომიტეტი"}>მრჩეველთა კომიტეტი</Link>
          </li>
          <li className={'pt-2'}>
            <Link href={"/კონსულტანტები"}>კონსულტანტები</Link>
          </li>
          <li className={'pt-2'}>
            <Link href={"/ცენტრის-სტუმრები"}>ცენტრის სტუმრები</Link>
          </li>
          <li className={'pt-2'}>
            <Link href={"/მიმართულებები"}>მიმართულებები</Link>
          </li>
        </ul>
      </div>
      {/*   ადმინისტრაცია  */}
      {/*ვორქშოპები*/}

      <div className="collapse min-h-0">
        <input type="checkbox" className={'min-h-0'}/>
        <div className="collapse-title text-center p-2 min-h-0">ვორქშოპები</div>
        <ul className="collapse-content text-center bg-third rounded-3xl">
          <li className={'pt-2'}>
            <Link href={"/თრენინგები"}>თრენინგები</Link>
          </li>
          <li className={'pt-2'}>
            <Link href={"/სემინარები"}>სემინარები</Link>
          </li>
          <li className={'pt-2'}>
            <Link href={"/აშშ-საზაფხულო-სკოლა"}>აშშ საზაფხულო სკოლა</Link>

          </li>
        </ul>
      </div>

      {/*ვორქშოპები*/}
      {/*პროექტები*/}
      <div className="collapse min-h-0">
        <input type="checkbox" className={'min-h-0'}/>
        <div className="collapse-title text-center p-2 min-h-0">პროექტები</div>
        <ul className="collapse-content text-center bg-third rounded-3xl">
          <li className={'pt-2'}>
            <Link href={"/მიმდინარე-პროექტები"}>მიმდინარე პროექტები</Link>
          </li>
          <li className={'pt-2'}>
            <Link href={"/დასრულებული-პროექტები"}>დასრულებული პროექტები</Link>
          </li>
        </ul>
      </div>
      {/*პროექტები*/}
      {/*ბიბლიოთეკა*/}

      <div className="collapse min-h-0">
        <input type="checkbox" className={'min-h-0'}/>
        <div className="collapse-title text-center p-2 min-h-0">ბიბლიოთეკა</div>
        <ul className="collapse-content text-center bg-third rounded-3xl">
          <li className={'pt-2'}>
            <Link href={"/ახალი-სახელმძღვანელოები"}>
              ახალი სახელმძღვანელოები
            </Link>
          </li>
          <li className={'pt-2'}>
            <Link href={"/დამხმარე-მასალები"}>დამხმარე მასალები</Link>
          </li>
          <li className={'pt-2'}>
            <Link href={"/ცენტრის-ბიბლიოთეკა"}>ცენტრის ბიბლიოთეკა</Link>
          </li>
          <li className={'pt-2'}>
            <Link href={"/გალერეა"}>გალერეა</Link>
          </li>
          <li className={'pt-2'}>
            <Link href={"/მემორანდუმები"}>მემორანდუმები</Link>
          </li>
        </ul>
      </div>

      {/*ბიბლიოთეკა*/}
      {/*რესურსები*/}


      <div className="collapse min-h-0">
        <input type="checkbox" className={'min-h-0'}/>
        <div className="collapse-title text-center p-2 min-h-0">რესურსები</div>
        <ul className="collapse-content text-center bg-third rounded-3xl">
          <li className={'pt-2'}>
            <Link href={"/თანამშრომლები"}>თანამშრომლები</Link>
          </li>
          <li>
            <Link href={"/სასწავლო-ოთახები"}>სასწავლო ოთახები</Link>
          </li>
          <li className={'pt-2'}>
            <Link href={"/გადამზადებული-მასწავლებლები"}>
              გადამზადებული მასწავლებლები
            </Link>
          </li>
          <li className={'pt-2'}>
            <Link href={"/NATO"}>NATO-ს ვიდეო სტუდია</Link>
          </li>
          <li className={'pt-2'}>
            <Link href={"/აპარატურა"}>აპარატურა</Link>
          </li>
        </ul>
      </div>
      {/*რესურსები*/}
      {/* პარტნიორები */}

      <div className="collapse min-h-0">
        <input type="checkbox" className={'min-h-0'}/>
        <div className="collapse-title text-center p-2 min-h-0">პარტნიორები</div>
        <ul className="collapse-content text-center bg-third rounded-3xl">
          <li className={'pt-2'}>
            <Link href={"/eu"}>ევროპა</Link>
          </li>
          <li className={'pt-2'}>
            <Link href={"/canada"}>კანადა</Link>
          </li>
          <li className={'pt-2'}>
            <Link href={"/eu"}>ევროპა</Link>
          </li>
        </ul>
      </div>
      {/* პარტნიორები */}
    </>
  );
};

export default LinksComponentMobile;
