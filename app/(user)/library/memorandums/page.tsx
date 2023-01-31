const Page = () => {
  return (
    <div className={"lt-container-small"}>
      <h1 className={"lt-page-h1"}>მემორანდუმები</h1>
      <div className={"mx-10"}>
        <h2 className={"lt-page-h2 text-center"}>
          პროფესიული განვითარების ცენტრში ხელმოწერილი მემორანდუმები
        </h2>
        <div>
          <embed
            className={"mt-5 mb-5 max-lg:hidden"}
            src="/goriIova.pdf"
            width="100%"
            height="800px"
          />
          <ul className={"pb-4"}>
            <li>
              <a
                href="/goriIova.pdf"
                target={"_blank"}
                className={"text-secondary lg:hidden lg:pb-10"}
              >
                მემორანდუმი აღმოსავლეთ აიოვას სათემო კოლეჯსა და გორის
                უნივერსიტეტს შორის
              </a>
            </li>
          </ul>
        </div>
        <div>
          <embed
            className={"mt-5 mb-5 max-lg:hidden"}
            src="/gtuCommunity.pdf"
            width="100%"
            height="800px"
          />
          <ul className={"pb-4"}>
            <li>
              <a
                href="/gtuCommunity.pdf"
                target={"_blank"}
                className={"text-secondary lg:hidden lg:pb-10"}
              >
                მემორანდუმი საქართველოს ტექნიკური უნივერსიტეტსა და სათემო
                კოლეჯები საერთაშორისო განვითარებისთვის გაერთიანებას შორის"
              </a>
            </li>
          </ul>
        </div>
        <ul className={"pb-10"}>
          <li>
            მემორანდუმი საქართველოს განათლების და მეცნიერების სამინისტროსა და
            სათემო კოლეჯები საერთაშორისო განვითარებისთვის გაერთიანებას შორის
            (ქართ)
          </li>
          <li>
            შეთანხმება გორის უნივერსიტეტსა და სათემო კოლეჯები საერთაშორისო
            განვითარებისთვის გაერთიანებას შორის
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page
