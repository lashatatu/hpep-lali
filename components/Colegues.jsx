const Colleagues = () => {
  return (
    <div className={"bg-primary bg-opacity-20 pt-16"}>
      <div className={"lt-container"}>
        <h1 className={"lt-page-h1 text-center text-6xl text-primary"}>
          თანამშრომლები
        </h1>
        <div className={"grid grid-cols-1 px-10 pb-6"}>
          <img
            src="https://i.imgur.com/NkRA9S7.png"
            alt=""
            className={"relative mx-auto h-32 w-32 rounded-full"}
          />
          <h1 className={"lt-page-h1 pt-8 text-primary"}>რამაზ ხუროძე</h1>
        </div>
        <div
          className={
            "grid grid-cols-1 gap-10 gap-y-16 px-10 pb-12 lg:grid-cols-3"
          }
        >
          <div>
            <img
              src="https://i.imgur.com/NkRA9S7.png"
              alt=""
              className={"relative mx-auto h-32 w-32 rounded-full"}
            />
            <h1 className={"lt-page-h3 pt-8 text-center text-primary"}>
              ღოღელიანი ლალი
            </h1>
          </div>
          <div>
            <img
              src="https://i.imgur.com/NkRA9S7.png"
              alt=""
              className={"relative mx-auto h-32 w-32 rounded-full"}
            />
            <h1 className={"lt-page-h3 pt-8 text-center text-primary"}>
              ბესტავაშვილი ბელა
            </h1>
          </div>
          <div>
            <img
              src="https://i.imgur.com/NkRA9S7.png"
              alt=""
              className={"relative mx-auto h-32 w-32 rounded-full"}
            />
            <h1 className={"lt-page-h3 pt-8 text-center text-primary"}>
              გელოვანი ეკატერინე
            </h1>
          </div>
          <div>
            <img
              src="https://i.imgur.com/NkRA9S7.png"
              alt=""
              className={"relative mx-auto h-32 w-32 rounded-full"}
            />
            <h1 className={"lt-page-h3 pt-8 text-center text-primary"}>
              მაღრაძე კოკა
            </h1>
          </div>
          <div>
            <img
              src="https://i.imgur.com/NkRA9S7.png"
              alt=""
              className={"relative mx-auto h-32 w-32 rounded-full"}
            />
            <h1 className={"lt-page-h3 pt-8 text-center text-primary"}>
              ასანიძე ივერი
            </h1>
          </div>
          <div>
            <img
              src="https://i.imgur.com/NkRA9S7.png"
              alt=""
              className={"relative mx-auto h-32 w-32 rounded-full"}
            />
            <h1 className={"lt-page-h3 pt-8 text-center text-primary"}>
              ლაშა ტატულაშვილი
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colleagues;
