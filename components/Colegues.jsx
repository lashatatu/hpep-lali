import ColegueComponent from "./ColegueComponent";
import Row from "./Row";

const Colleagues = () => {
  return (
    <div className={"bg-primary bg-opacity-20 pt-16"}>
      <div className={"lt-container items-center justify-center"}>
        <h1 className={"lt-page-h1 text-center text-3xl text-primary "}>
          თანამშრომლები
        </h1>
        <div className={"grid grid-cols-1 px-10 pb-6"}>
          <ColegueComponent
            className={"grid grid-cols-1 px-10 pb-6"}
            img={"https://i.imgur.com/NkRA9S7.png"}
            name={"რამაზ ხუროძე"}
          />
        </div>
        <div
          className={
            "grid grid-cols-1 items-center justify-items-center gap-10 gap-y-16 px-10 pb-12 lg:grid-cols-3 "
          }
        >
          <ColegueComponent
            img={"https://i.imgur.com/tszrM86.jpg"}
            name={"ლალი ღოღელიანი"}
          />
          <ColegueComponent
            img={"https://i.imgur.com/NkRA9S7.png"}
            name={"ბელა ბესტავაშვილი"}
          />
          <ColegueComponent
            img={"https://i.imgur.com/NkRA9S7.png"}
            name={"ეკატერინე გელოვანი"}
          />
          <ColegueComponent
            img={"https://i.imgur.com/NkRA9S7.png"}
            name={"თამუნა საზანდრიშვილი"}
          />
          <ColegueComponent
            img={"https://i.imgur.com/zVbShu8.png"}
            name={"ივერი ასანიძე"}
          />
          <ColegueComponent
            img={"https://i.imgur.com/NkRA9S7.png"}
            name={"ქეთი ნაჭყებია"}
          />
        </div>
        <Row isLastRow className={"justify-center gap-10"}>
          <ColegueComponent
            img={"https://i.imgur.com/8oJkrCW.jpg"}
            name={"ლაშა ტატულაშვილი"}
          />
        </Row>
      </div>
    </div>
  );
};

export default Colleagues;
