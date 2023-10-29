import ColegueComponent from "./ColegueComponent";

const Colleagues = () => {
  return (
    <div className={"bg-white bg-opacity-20 pt-16"}>
      <div className={"lt-container items-center justify-center"}>
        <h1 className={"lt-page-h1 text-center text-2xl text-primary "}>
          ცენტრის თანამშრომლები
        </h1>
        <div
          className={
            "grid grid-cols-1 items-center justify-items-center gap-2 gap-y-2 px-10 pb-12 lg:grid-cols-4 "
          }
        >
          <ColegueComponent
            className={"grid grid-cols-1 px-10 pb-6"}
            img={"https://i.imgur.com/g4alk4b.jpg"}
            rank={"აკადემიკოსი"}
            name={"რამაზ ხუროძე"}
          />
          <ColegueComponent
            img={"https://i.imgur.com/tszrM86.jpg"}
            rank={"პროფესორი"}
            name={"ლალი ღოღელიანი"}
          />
          <ColegueComponent
            img={"https://i.imgur.com/7tX2tEM.jpg"}
            rank={"უფროსი სპეციალუსტი"}
            name={"ბელა ბესტავაშვილი"}
          />
          <ColegueComponent
            img={"https://i.imgur.com/gqxnuTY.jpg"}
            rank={"დოქტორის აკადემიური ხარისხი"}
            name={"ეკატერინე გელოვანი"}
          />
          <ColegueComponent
            img={"https://i.imgur.com/XPHwj53.jpg"}
            rank={"სპეციალისტი"}
            name={"თამუნა საზანდრიშვილი"}
          />
          <ColegueComponent
            img={"https://i.imgur.com/zVbShu8.png"}
            rank={"მაგისტრის აკადემიური ხარისხი"}
            name={"ივერი ასანიძე"}
          />
          <ColegueComponent
            img={"https://i.imgur.com/YLQqyk0.jpg"}
            rank={"დოქტორის აკადემიური ხარისხი"}
            name={"ქეთი ნაჭყებია"}
          />
          <ColegueComponent
            img={"https://i.imgur.com/8oJkrCW.jpg"}
            rank={"მაგისტრის აკადემიური ხარისხი"}
            name={"ლაშა ტატულაშვილი"}
          />
        </div>
      </div>
    </div>
  );
};

export default Colleagues;
