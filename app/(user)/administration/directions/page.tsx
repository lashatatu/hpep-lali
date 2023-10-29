import Link from "next/link";

const Page = () => {
  return (
    <>
      <head>
        <title>{`მიმართულებები | HPEP.GE`}</title>
      </head>
      <div className={"lt-container"}>
        <h1 className={"lt-page-h1 text-2xl"}>მიმართულებები</h1>
        <div className={"mx-10"}>
          <div
            id={"first"}
            className={
              "lt-last-child flex content-center justify-center max-lg:flex-col "
            }
          >
            <a href={"#first"} className={"btn"}>
              კვალიფიკაციის ამაღლება
            </a>
            <a href={"#second"} className={"btn"}>
              საექსპერტო
            </a>
            <a href={"#third"} className={"btn"}>
              გალერეა უნივერსი
            </a>
            <a href={"#fourth"} className={"btn"}>
              სტუ სტუდია
            </a>
            <a href={"#fifth"} className={"btn"}>
              NATO სტუდია
            </a>
          </div>
          {/*// first 1*/}
          <div>
            <h2 className={"lt-page-h2 text-center text-xl"}>
              აკადემიური და მასწავლებელთა პერსონალის განვითარების ცენტრი
            </h2>
            <div className={"lt-container-small pb-12"}>
              <h3 className={"lt-page-h3 text-xl"}>
                მიმართულების საქმიანობის აღწერა:
              </h3>
              <ol className={"lt-page-ul-ol-padding list-decimal"}>
                <li>
                  ცენტრში არსებული თრენინგების რესურსების ბაზის მუდმივი
                  გაუმჯობესება და განახლება საერთაშორისო პარტნიორებთან
                  თანამშრომლობის გზით
                </li>

                <li>
                  პარტნიორული ურთიერთობები საქართველოს განათლებისა და
                  მეცნიერების სამინისტროს მასწავლებელთა გადამზადების ცენტრთან
                </li>

                <li>
                  პარტნიორული ურთიერთობები განათლების ხარისხის განვითარების
                  ეროვნულ ცენტრთან
                </li>

                <li>
                  მჭიდრო თანამშრომლობა სტუ-ს ხარისხის განვითარების სამსახურთან
                  და ფაკულტეტების შესაბამის სამსახურებთან
                </li>

                <li>
                  სტუ-ს ფაკულტეტების პროფესორ-მასწავლებლებისა და სტუდენტების
                  მოსაზრებებისა და მოთხოვნების შესწავლა სასწავლო პროცესის
                  წარმართვისა და შეფასების შესახებ
                </li>

                <li>
                  აქცენტები საინჟინრო სპეციალობის საგნების სწავლებისა და სწავლის
                  მეთოდოლოგიებზე
                </li>

                <li>
                  თრეინინგების მასალების ადაპტირება ზოგადად ქართულ რეალობასთან
                  და კონკრეტულად ტექნიკური უნივერსიტეტის მოთხოვნებთან
                </li>

                <li>
                  თრეინინგების პაკეტების თარგმნა და მომზადება სწავლებისთვის
                </li>

                <li>თრეინინგების პილოტირება</li>

                <li>თრეინინგების განხორციელება</li>

                <li>
                  თრეინინგების მონაწილეთა სერტფიცირება საზღვარგარეთელ
                  პარტნიორებთან ერთობლივად
                </li>

                <li>თრეინინგების შედეგების მონიტორინგი</li>
              </ol>
            </div>
            <div className={"lt-container-small pb-12"}>
              <h4 className={"lt-page-h4 text-xl"}>
                თანამშრომლები: ლალი ღოღელიანი, ეკატერინე გელოვანი, ივერი ასანიძე
              </h4>
            </div>
            <div className={"lt-container-small pb-12"}>
              <h3 className={"lt-page-h3 text-xl"}>
                შექმნილია შემდეგი საერთაშორისო პროექტების გამოცდილების
                საფუძველზე:
              </h3>
              <ul className={"lt-page-ul-ol-padding list-disc font-bold"}>
                <li>
                  Iowa State University, Ames, Iowa, US .The Center for
                  Excellence in Learning and Teaching Workshop on Innovative
                  Teaching Techniques and Methodology
                </li>

                <li>
                  IWENT – Capacity Building International, Germany.Training:
                  “Vocational Pedagogic”
                </li>

                <li>
                  Project European Studies in the TEMPUS-TUNING project .
                  COO3BO4) - “Tuning Educational Structures in Europe”
                  ..Trainins.
                </li>

                <li>
                  TEMPUS-Tacis Project SM-SCM_T029A06 “EQUASER”, “Establishing
                  Quality Assurance Services in the Georgian Higher Education
                  Institutions .Training
                </li>

                <li>
                  MES of Georgia’s project ”Training for vocational education
                  center’s teachers from Gori, Tsnori and Akhalkalaki in modern
                  teaching methodologies. Manager
                </li>

                <li>
                  New teaching and learning methodologies for GTU teachers (USA
                  embassy, MES of Georgia GTU). Facilitator
                </li>

                <li>
                  TASIC Project European Studies in the TEMPUS-TUNING project
                  (SCM-COO3BO4) - “Tuning Educational Structures in Europe”.
                </li>

                <li>
                  EIF Foundation grant “Educating Georgian Community College
                  Students in Engineering & Technical Subjects”.Manager.
                </li>

                <li>
                  TEMPUS-Tacis Project SM-SCM_T029A06 – 2006 “EQUASER”, -
                  “Establishing Quality Assurance Services in the Georgian
                  Higher Education Institutions »
                </li>

                <li>
                  CCPP (Canadian College Partnership Program), Ottawa, Canada.
                </li>

                <li>
                  Civic Society Institute with support of USAID, Tbilisi,
                  Georgia
                </li>

                <li>
                  Series of Seminars on Establishment of Bologna Process
                  Principles in Georgia
                </li>

                <li>
                  American Conference of Academic Deans (ACAD) Leadership
                  Workshop Certificate in ACAD Leadership.
                </li>

                <li>
                  ACCC (Association of Canadian Community Colleges).
                  Participated In Forum: “Local Ownership of Development”.
                </li>

                <li>
                  Sigma Xi (The Scientific Research Society of American
                  Scholars) Workshop on Research and Higher Education for
                  Service of Society presented by Gretchen Kalonge – Director of
                  Department of International Relation of University of
                  California, USA. Organizer Training courses in: “Innovative
                  Teaching Techniques and Methodology”
                </li>

                <li>
                  CIDA,Canadian International Development Association , project
                  “Education – economic catalyst “ #783-z, for Georgia’s
                  regions-Gori, Akhalkalaki,Batumi,Tsnori. Manager
                </li>

                <li>
                  Translation-adaptation & publication of the first year
                  curriculums & textbooks for the professional centers of
                  Akhalkalaki, Gori & Chiatura (MES, CCID,GTU),participant
                </li>

                <li>
                  Science Education for New Civic Engagements and
                  Responsibilities (usnsf, Harrisburg University, Ge
                </li>
              </ul>
            </div>
          </div>
          <div
            id={"second"}
            className={
              "lt-last-child flex content-center justify-center max-lg:flex-col "
            }
          >
            <a href={"#first"} className={"btn"}>
              კვალიფიკაციის ამაღლება
            </a>
            <a href={"#second"} className={"btn"}>
              საექსპერტო
            </a>
            <a href={"#third"} className={"btn"}>
              გალერეა უნივერსი
            </a>
            <a href={"#fourth"} className={"btn"}>
              სტუ სტუდია
            </a>
            <a href={"#fifth"} className={"btn"}>
              NATO სტუდია
            </a>
          </div>
          {/*// second 2*/}
          <div>
            <h2 className={"lt-page-h2 text-center text-xl"}>
              ეკონომიკის განვითარების ხელშემწყობი საგანმანათლებლო და საექსპერტო
              მიმართულება.
            </h2>
            <div className={"lt-container-small pb-12"}>
              <h3 className={"lt-page-h3 text-xl"}>
                მიმართულების საქმიანობების აღწერა:
              </h3>
              <ol className={"lt-page-ul-ol-padding list-decimal"}>
                <li>
                  დასაქმების ბაზრისა და დამსაქმებლების მოთხოვნების შესწავლა
                </li>

                <li>დაკვეთები საწარმოების თანამშრომელთა გადამზადებაზე;</li>

                <li>
                  დაკვეთები საინჟინრო პროექტირებისა და განხორციელებული
                  პროექტების ექსპერტიზაზე;
                </li>

                <li>
                  პროფესიული განათლების სტანდარტებისა და პროგრამების შექმნასა და
                  განხორციელებაში მონაწილეობა სტუ-ს ფაკულტეტებთან
                  თანამშრომლობით;
                </li>

                <li>
                  სწავლისა და სწავლების მეთოდოლოგიების გაზიარებისა და მათი
                  პრაქტიკაში დანერგვის საკითხებში სტუ-ს ფაკულტეტებთან
                  თანამშრომლობა;
                </li>

                <li>
                  პროფესიული პროგრამების საწარმოო პრაქტიკის უზრუნველყოფა
                  (პროგრამების მონიტორინგი, ხელშეკრულებების მონიტორინგი
                  (განახლება და ახალის გაფორმება);
                </li>

                <li>
                  თრეინინგების მომზადება ბიზნესის მოთხოვნების შესაბამისად ბიზნეს
                  ორგანიზაციებისა და საწარმოებებისათვის;
                </li>

                <li>
                  თრეინინგების სახელმძღვანელოების შექმნა ბიზნესის მოთხოვნების
                  შესაბამისად;
                </li>

                <li>
                  თრეინინგების განხორციელება, შესაბამისი დამხმარე მასალებისა
                  შექმნა და ჩატარების უზრუნველყოფა:
                </li>

                <li>
                  პროფესიული სპეციალობების სტანდარტების მოდიფიცირების პროცესში
                  მონაწილეობა საქართველოს შესაბამისი სტრუქტურებსა და
                  საერთაშორისო ორგა
                </li>
              </ol>
            </div>
            <div className={"lt-container-small pb-12"}>
              <h4 className={"lt-page-h4 text-xl"}>
                თანამშრომლები: რამაზ ხუროძე, ქეთევან პაჭკორია
              </h4>
            </div>
            <div className={"lt-container-small pb-12"}>
              <h3 className={"lt-page-h3 text-xl"}>
                შექმნილია შემდეგი საერთაშორისო პროექტების გამოცდილების
                საფუძველზე:
              </h3>
              <ul className={"lt-page-ul-ol-padding list-disc font-bold"}>
                <li>
                  USAID project “Georgia Economic Prosperity Initiative (EPI)”,
                  Deloitte Consulting/CCID / USAID Georgia EPI RFP /
                  TA-11-0143.Manager from CCID .
                </li>

                <li>
                  USAID,IOM.Project “Successful Completion of a Professional
                  Internship Guarantees a Graduate's Employment.”Project manager
                </li>

                <li>
                  EuropeAid/132132/C/SER/GE Quality Enhancement and Capacity
                  Building Support programme in VET Sector of Georgia.
                </li>

                <li>
                  ETF conference “linking VET programs with labor market
                  requirements-a contribution through curriculum reform.
                </li>

                <li>
                  Business Education International Conference.Tbilisi. NGO
                  “Workforce Partners”.
                </li>

                <li>
                  ENP – E – CP WP11 – 31- 08 GEO .ETF Expertise Provision for
                  VET Curriculum Development Initiative in Georgia.
                </li>

                <li>
                  A Structured Approach to Developing National Occupational
                  Standards and learning outcomes in relation to two sets of
                  Occupational Standards (OS) developed in the Republic of
                  Georgia.Participant
                </li>

                <li> “2011 CCID Annual Conference”.Orlando.</li>

                <li>
                  European Prison Education Association 13th International
                  Conference ‘Learn to be Free’
                </li>

                <li>
                  held in Manchester, UK 27th – 30th October 2011.Participant.
                </li>

                <li>
                  UNDP project: “Preparing the Way for a VET Center at Gori
                  University”.Manager from CCID.
                </li>

                <li>
                  USAID.Workforce Development Initiative for Shida Kartli
                  Region, Tbilisi, Georgia.Manager.
                </li>

                <li>
                  UNDP grant “Investigation of labour market in shida kartli
                  region.Development Vocational Education standarts,programs and
                  textbooks in engineering and agriculture specialities”.Project
                  manager.
                </li>

                <li>
                  USAID project “ Successful Completion of a Professional
                  Internship Guarantees a Graduate's Employment”.
                </li>

                <li>
                  An Internship & Practice Program Proposed for Gori
                  University’s Higher Professional Educational Program’s
                  Business Administration Specialties. Manager.
                </li>

                <li>
                  USAID project, “Shida Kartli region workforce education
                  initiative for economic development” The SME support project,
                  CCID. Manager
                </li>

                <li>
                  Kirkwood Community College, Cedar Rapids, Iowa, US .Seminar in
                  The National Center for Agrscience and
                </li>

                <li>
                  Technology Education funded by the National Science Foundation
                  (NSF) on Enhancing Faculty Development, Improving Curriculum
                  and Instruction and Expending the skilled and Educated
                  Workforce for Economic Development.
                </li>

                <li>
                  International Women in Science and Engineering (IWISE) Project
                  concerning Relationships between Professional Education and
                  Economic Development in Four Regions of Georgia .Manager from
                  Georgian side
                </li>

                <li>
                  Moraine Valley, Palos Hills, Illinois, US Seminar on
                  International Community Partnerships in Professional Education
                </li>

                <li>
                  Waukesha County Technical College, Pewaukee, Wisconsin, US.
                  Seminar on Development of Curriculums and Sy
                </li>
              </ul>
            </div>
          </div>
          <div
            id={"third"}
            className={
              "lt-last-child flex content-center justify-center max-lg:flex-col "
            }
          >
            <a href={"#first"} className={"btn"}>
              კვალიფიკაციის ამაღლება
            </a>
            <a href={"#second"} className={"btn"}>
              საექსპერტო
            </a>
            <a href={"#third"} className={"btn"}>
              გალერეა უნივერსი
            </a>
            <a href={"#fourth"} className={"btn"}>
              სტუ სტუდია
            </a>
            <a href={"#fifth"} className={"btn"}>
              NATO სტუდია
            </a>
          </div>
          {/*// third 3*/}
          <div>
            <h2 className={"lt-page-h2 text-center text-xl"}>
              სტუ-ს გალერეა „უნივერსი“
            </h2>
            <div className={"lt-container-small pb-12"}>
              <h3 className={"lt-page-h3 text-xl"}>
                გალერეის საქმიანობის აღწერა:
              </h3>
              <ol className={"lt-page-ul-ol-padding list-decimal"}>
                <li>
                  სტუდენტთა და პროფესორ-მასწავლებელთა ინფორმირება თანამედროვე
                  კულტურული ცხოვრების სიახლეების შესახებ
                </li>

                <li>
                  გამოფენებისა და სხვა კულტურული ღონისძიებების ორგანიზება და
                  წარმართვა
                </li>

                <li>ხელშეკრულებების გაფორმება დამკვეთებთან</li>

                <li>
                  სტუ-ის სხვადასხვა ერთეულების შეხვედრების ორგანიზება და
                  ტექნიკური უზრუნველყოფა
                </li>

                <li>უცხოელი სტუმრების პრეზენტაციები</li>

                <li>სტუდენტური შეხვედრები</li>

                <li>პროფესორ-მასწავლებელთა ლექციები და პრეზენტაციები</li>

                <li>
                  სტუ-ს სხვადასხვა ერთეულების თრეინინგების ორგანიზება და
                  ტექნიკური უზრუნველყოფ
                </li>
              </ol>
            </div>
            <div className={"lt-container-small pb-12"}>
              <h4 className={"lt-page-h4 text-xl"}>
                თანამშრომლები: ბელა ბესტავაშვილი, ეკა გელოვანი
              </h4>
            </div>
          </div>
          <div
            id={"fourth"}
            className={
              "lt-last-child flex content-center justify-center max-lg:flex-col "
            }
          >
            <a href={"#first"} className={"btn"}>
              კვალიფიკაციის ამაღლება
            </a>
            <a href={"#second"} className={"btn"}>
              საექსპერტო
            </a>
            <a href={"#third"} className={"btn"}>
              გალერეა უნივერსი
            </a>
            <a href={"#fourth"} className={"btn"}>
              სტუ სტუდია
            </a>
            <a href={"#fifth"} className={"btn"}>
              NATO სტუდია
            </a>
          </div>
          {/*// fourth 4*/}
          <div>
            <h2 className={"lt-page-h2 text-center text-xl"}>
              სტუ-ს ვიდეო სტუდია
            </h2>
            <div className={"lt-container-small pb-12"}>
              <h3 className={"lt-page-h3 text-xl"}>
                სტუდიის საქმიანობის აღწერა:
              </h3>
              <ol className={"lt-page-ul-ol-padding list-decimal"}>
                <li>
                  პროფესორ-მასწავლებელთა ვიდეო ლექციების ჩაწერა, გამრავლება და
                  გავრცელება
                </li>

                <li>
                  დახელოვნების ცენტრის მიერ შექმნილი ვიდეო თრეინინგების ჩაწერა,
                  გამრავლება და გავრცელება
                </li>

                <li>
                  სპეციალობების სარეკლამო ვიდეო კლიპების მომზადება და გავრცელება
                </li>
              </ol>
            </div>
            <div className={"lt-container-small pb-12"}>
              <h4 className={"lt-page-h4 text-xl"}>
                თანამშრომლები: ივერი ასანიძე, ლაშა ტატულაშვილი
              </h4>
            </div>
            <div className={"lt-container-small pb-12"}>
              <h3 className={"lt-page-h3 text-xl"}>
                შექმნილია NATO-სა და კანადის საერთაშორისო განვითარების სააგენტოს
                პროექტების ფარგლებში:
              </h3>
              <ul className={"lt-page-ul-ol-padding list-disc font-bold"}>
                <li>
                  NATO science for peace and security program Networking
                  infrastructure
                </li>
                <li>
                  Grant. “Developing cost-effective and sustainable network and
                  technical infrastructures in Georgia”.Manager.
                </li>
                <li>
                  ACCC project-The Economic Development and Poverty Reduction
                  Program (GTU, Selkrik College , Thompson River university)
                </li>
              </ul>
            </div>
          </div>
          <div
            id={"fifth"}
            className={
              "lt-last-child flex content-center justify-center max-lg:flex-col "
            }
          >
            <a href={"#first"} className={"btn"}>
              კვალიფიკაციის ამაღლება
            </a>
            <a href={"#second"} className={"btn"}>
              საექსპერტო
            </a>
            <a href={"#third"} className={"btn"}>
              გალერეა უნივერსი
            </a>
            <a href={"#fourth"} className={"btn"}>
              სტუ სტუდია
            </a>
            <a href={"#fifth"} className={"btn"}>
              NATO სტუდია
            </a>
          </div>
          {/*// fifth 5*/}
          <div>
            <h2 className={"lt-page-h2 text-center text-xl"}>
              სტუ-ს NATO-ს სტუდია
            </h2>
            <div className={"lt-container-small pb-12"}>
              <h3 className={"lt-page-h3 text-xl"}>
                სტუდიის საქმიანობის აღწერა:
              </h3>
              <ol className={"lt-page-ul-ol-padding list-decimal"}>
                <li>
                  ონლაინ სემინარებისა და თრეინინგების განხორციელება საქართველოს
                  სხვადასხვა უმაღლეს და პროფესიულ სასწავლებლებთან
                </li>

                <li>
                  ლაბორატორიული სამუშაოების კომპიუტერული პროგრამების პილოტირება
                  და დანერგვა საინჟინრო სპეციალობების საგნებისათვის
                </li>

                <li>
                  Moodle-ის სტუდია (პედაგოგთა თრეინინგები ელ.სწავლების
                  მეთოდოლოგიებში)
                </li>

                <li>
                  ლექციებისა და სწავლების სხვა ფორმების სასწავლო მასალის
                  ფომატირება ელ. სწავლებისთვის
                </li>

                <li>
                  მასალების კოლექტირება და ბაზის შექმნა ელ.სწავლებისთვის
                  ამერიკის და კანადის ტომსონ რივერ აიოვას უნივერსიტეტებთან
                  თანამშრომლობით
                </li>

                <li>
                  კომპიუტერული პროგრამების პილოტირება და განხორციელება
                  ლაბორატორიული სამუშაოების განსახორციელებლად
                </li>

                <li>
                  სამშენებლო ფაკულტეტის ვებსაიტის მართვა დეპარტამენთებთან
                  თანამშრომლობით
                </li>

                <li>
                  ონლაინ სემინარებისა და თრეინინგების განხორციელება საქართველოს
                  სხვადასხვა უმაღლეს და პროფესიულ სასწავლებლებთან
                </li>
              </ol>
            </div>
            <div className={"lt-container-small pb-12"}>
              <h4 className={"lt-page-h4 text-xl"}>
                თანამშრომლები: ივერი ასანიძე, ლაშა ტატულაშვილი
              </h4>
            </div>
            <div className={"lt-container-small pb-12"}>
              <h3 className={"lt-page-h3 text-xl"}>
                შექმნილია ნატოს პროექტის ფარგლებში აიოვას უნივერსიტეტთან
                თანამშროლობით
              </h3>
              <ul className={"lt-page-ul-ol-padding list-disc font-bold"}>
                <li>
                  NATO science for peace and security program Networking
                  infrastructure
                </li>
                <li>
                  Grant. “Developing cost-effective and sustainable network and
                  technical infrastructures in Georgia”.Manager.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
