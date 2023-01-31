import {
  constructionBusinessAdministration, goriCollegeComitee,
  hotelAndResoutrants, smallBusiness
} from './data/data'

const Page = () => {
  return (
    <div className={"lt-container-small"}>
      <h1 className={"lt-page-h1 "}>მრჩეველთა კომიტეტი</h1>
      <div className={"mx-10"}>
        <h2 className={"lt-page-h2 text-center"}>
          მრჩეველთა კომიტეტი შემდგომი უმაღლესი პროფესიული განათლების
          პროგრამებისათვის
        </h2>
        <h3 className={"lt-page-h3 text-center"}>
          მშენებლობის ბიზნეს ადმინისტრირება
        </h3>

        <div className={"lt-page-2grid lt-page-align-left-span-2"}>
          {constructionBusinessAdministration.map((dat) => (
            <>
              <div className={"font-bold"} key={dat.name}>
                {dat.name}
              </div>
              <div>{dat.description}</div>
            </>
          ))}
        </div>
      </div>
      <div className={"mx-10"}>
        <h3 className={"lt-page-h3 text-center"}>
          სასტუმრო, რესტორნების და სპეციალური ღონისძიებების დაგეგმვის ბიზნეს
          ადმინისტრირება
        </h3>
        <div className={"lt-page-2grid lt-page-align-left-span-2"}>
          {hotelAndResoutrants.map((dat) => (
            <>
              <div className={"font-bold"} key={dat.name}>
                {" "}
                {dat.name}
              </div>

              <div> {dat.description}</div>
            </>
          ))}
        </div>
      </div>
      <div className={"mx-10"}>
        <h3 className={"lt-page-h3 text-center"}>
          მცირე ბიზნესის ადმინისტრირება
        </h3>
        <div className={"lt-page-2grid lt-page-align-left-span-2"}>
          {
            smallBusiness.map((dat)=>(
              <>
                <div className={"font-bold"} key={dat.name}> {dat.name}</div>

                <div> {dat.description}</div>
              </>
            ))
          }
        </div>
      </div>

      <div className={"mx-10"}>
        <h3 className={"lt-page-h3 text-center"}>
          გორის კოლეჯის მრჩეველთა კომიტეტი
        </h3>
        <div className={"lt-page-2grid lt-page-align-left-span-2"}>
          {
            goriCollegeComitee.map((dat)=>(
              <>
                <div className={"font-bold"} key={dat.name}> {dat.name}</div>

                <div> {dat.description}</div>
              </>
            ))
          }
        </div>
      </div>
      <div className={"mx-10"}>
        <h2 className={"lt-page-h2 text-center"}>
          მრჩეველთა კომიტეტი შემდგომი უმაღლესი პროფესიული განათლების
          პროგრამებისათვის:
        </h2>

        <h3 className={"lt-page-h3 text-center"}>
          მშენებლობის ბიზნეს ადმინისტრირება
        </h3>
        <div className={"lt-page-2grid lt-page-align-left-span-2"}>
          {constructionBusinessAdministration.map((dat) => (
            <>
              <div className={"font-bold"} key={dat.name}>
                {dat.name}
              </div>
              <div>{dat.description}</div>
            </>
          ))}
        </div>
      </div>
      <div className={"mx-10"}>
        <h3 className={"lt-page-h3 text-center"}>
          სასტუმრო, რესტორნების და სპეციალური ღონისძიებების დაგეგმვის ბიზნეს
          ადმინისტრირება
        </h3>
        <div className={"lt-page-2grid lt-page-align-left-span-2"}>
          {hotelAndResoutrants.map((dat) => (
            <>
              <div className={"font-bold"} key={dat.name}>
                {" "}
                {dat.name}
              </div>

              <div> {dat.description}</div>
            </>
          ))}
        </div>
      </div>
      <div className={"mx-10"}>
        <h3 className={"lt-page-h3 text-center"}>
          მცირე ბიზნესის ადმინისტრირება
        </h3>
        <div className={"lt-page-2grid lt-page-align-left-span-2"}>
          {
            smallBusiness.map((dat)=>(
              <>
                <div className={"font-bold"} key={dat.name}> {dat.name}</div>

                <div> {dat.description}</div>
              </>
            ))
          }
        </div>

        <h3 className={"lt-page-h3 text-center"}>
          გორის კოლეჯის მრჩეველთა კომიტეტი
        </h3>
        <div className={"lt-page-2grid lt-page-align-left-span-2"}>
          {
            goriCollegeComitee.map((dat)=>(
              <>
                <div className={"font-bold"} key={dat.name}> {dat.name}</div>

                <div> {dat.description}</div>
              </>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Page;
