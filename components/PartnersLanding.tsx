import Image from "next/image";

const PartnersLanding = () => {
  return (
    <div className={"lt-container"}>
      <div className={"mx-10"}>
        <div
          className={
            " gap-x-4 border-t-2 max-lg:object-center max-lg:text-center"
          }
        >
          <div className={"grid grid-cols-5 gap-x-4 pt-16 max-lg:grid-cols-1"}>
            <div>
              <h3 className={"pb-0.5 font-bold"}>გორის სათემო კოლეჯი</h3>
              <Image
                src={"/gorilogo.jpg"}
                alt={"gori logo"}
                width={300}
                height={300}
                className={"mx-auto"}
              />
              <p className={"indent-0"}>
                გორის უნივერსიტეტის უმაღლესი საგანმანათლებლო პროგრამები ბიზნეს
                ადმინისტრირებაში
              </p>
            </div>
            <div className={"max-lg:border-t-2 max-lg:pt-8"}>
              <h3 className={"pb-0.5 font-bold"}>ონლაინ ვიდეო მასალები</h3>
              <Image
                src={"/onlinevideo.jpg"}
                alt={"gori logo"}
                width={300}
                height={300}
                className={"mx-auto"}
              />
              <p className={"indent-0"}>
                ცენტრის ტრენერების მიერ ჩატარებული სემინარები სხვადასხვა
                უნივერსიტეტის მასწავლებელთათვის
              </p>
            </div>
            <div className={"max-lg:border-t-2 max-lg:pt-8"}>
              <h3 className={"pb-0.5 font-bold"}>MOODLE სისტემა</h3>
              <Image
                src={"/moodle.jpg"}
                alt={"gori logo"}
                width={300}
                height={300}
                className={"mx-auto"}
              />
              <p className={"indent-0"}>
                Moodle-ს კურსის მენეჯმენტის სისტემა უმაღლესი საგანმანათლებლო
                პროგრამებისთვის
              </p>
            </div>
            <div className={"max-lg:border-t-2 max-lg:pt-8"}>
              <h3 className={"pb-0.5 font-bold"}>ათასწლეულის პროექტი</h3>
              <Image
                src={"/milenium.jpg"}
                alt={"gori logo"}
                width={300}
                height={300}
                className={"mx-auto"}
              />
              <p className={"indent-0"}>
                2014წ. 2 მაისს, აგს-საქართველო აცხადებს პროექტების მიღებას
                საკონსულტაციო სერვისებზე
              </p>
            </div>
            <div className={"max-lg:border-t-2 max-lg:pt-8"}>
              <h3 className={"pb-0.5 font-bold"}>NATO-ს სტუდია</h3>
              <p className={"indent-0"}>
                NATO-ს გრანტით, ცენტრმა ჩამოაყალიბა ვიდეო სტუდია, რათა
                განვახორციელოთ ვიდეო კონფერენციები მოშორებულ რეგიონებში,
                შევქმნათ საგანმანათლებლო ვიდეო მასალები და ხელი შევუწყოთ
                პარტნიორ კოლეჯებს შორის საგანმანათლებლო ქსელის განვითარებას
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// test

export default PartnersLanding;
