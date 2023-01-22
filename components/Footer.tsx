import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="  bg-neutral text-neutral-content">
      <div className={'lt-container-small footer grid-rows-2 p-10'}>
      <div>
        <span className="footer-title font-bold">ადმინისტრაცია</span>
        <Link href={"/administration/advisory-board"} className="link link-hover">მრჩეველთა საბჭო</Link>
        <Link href={"/administration/advisory-committee"} className="link link-hover">მრჩეველთა კომიტეტი</Link>
        <Link href={"/administration/consultants"} className="link link-hover">კონსულტანტები</Link>
        <Link href={"/administration/guests-of-the-center"} className="link link-hover">ცენტრის სტუმრები</Link>
        <Link href={"/administration/directions"} className="link link-hover">მიმართულებები</Link>
      </div>
      <div>
        <span className="footer-title">ვორქშოპები</span>
        <Link href={"/workshops/trainings"} className="link link-hover">თრენინგები</Link>
        <Link href={"/workshops/seminars"} className="link link-hover">სემინარები</Link>
        <Link href={"/workshops/us-summer-school"} className="link link-hover">აშშ საზაფხულო სკოლა</Link>
      </div>

      <div>
        <span className="footer-title">ბიბლიოთეკა</span>
        <Link href={"/library/new-textbooks"} className="link link-hover">ახალი სახელმძღვანელოები</Link>
        <Link href={"/library/supporting-materials"} className="link link-hover">დამხმარე მასალები</Link>
        <Link href={"/library/center-library"} className="link link-hover">ცენტრის ბიბლიოთეკა</Link>
        <Link href={"/library/gallery"} className="link link-hover">გალერეა</Link>
        <Link href={"/library/memorandums"} className="link link-hover">მემორანდუმები</Link>
      </div>
      <div>
        <span className="footer-title">პროექტები</span>
        <Link href={"/projects/current-projects"} className="link link-hover">მიმდინარე პროექტები</Link>
        <Link href={"/projects/finished-projects"} className="link link-hover">დასრულებული პროექტები</Link>
      </div>
      <div>
        <span className="footer-title">რესურსები</span>
        <Link href={"/resources/employees"} className="link link-hover">თანამშრომლები</Link>
        <Link href={"/resources/study-rooms"} className="link link-hover">სასწავლო ოთახები</Link>
        <Link href={"/resources/trained-teachers"} className="link link-hover">გადამზადებული მასწავლებლები</Link>
        <Link href={"/resources/NATO-video-studio"} className="link link-hover">NATO-ს ვიდეო სტუდია</Link>
      </div>
      <div>
        <Link href={'/partners'} className="footer-title">პარტნიორები</Link>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
