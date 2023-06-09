import { gtuFaculties, advisoryBoard,gtuFacultyDeans } from "./data/data";

const Page = () => {
  return (
    <>
      <head>
        <title>{`მრჩეველთა საბჭო | HPEP.GE`}</title>
      </head>
      <div className={'lt-container-small'}>
        <h1 className={'lt-page-h1'}>მრჩეველთა საბჭო</h1>
        <h2 className={'lt-page-h3 mx-10'}>ადმინისტრაციის წარმომადგენლები</h2>
        <div className={'mx-10 '}>
          <ul className={'lt-page-ul'}>
            {
              // @ts-ignore
              advisoryBoard.map((dat) => (
                <li key={dat.name}>
                  <span className={'font-bold'}>{dat.name}</span>
                  ,{' '}
                  {dat.description}
                </li>
              ))}
          </ul>
        </div>
        <h2 className={'lt-page-h3 mx-10'}>სტუ-ს ფაკულტეტები</h2>
        <div className={'mx-10'}>
          <ul className={'lt-page-ul'}>
            {
              // @ts-ignore
              gtuFaculties.map((dat) => (
                <li key={dat}>{dat}</li>
              ))}
          </ul>
        </div>
        <h2 className={'lt-page-h3 mx-10'}>სტუს ფაკულტეტების დეკანები</h2>
        <div className={'mx-10'}>
          <ul className={'lt-page-ul'}>
            {
              // @ts-ignore
              gtuFacultyDeans.map((dat) => (
                <li key={dat.name}>
                  <span className={'font-bold'}>{dat.name}</span>
                  - {dat.description}</li>

              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;
