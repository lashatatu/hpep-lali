import {
  ianvari22019,
  ianvari312019,
  ianvari32021,
  ivnisi222020,
  ivnisi272021,
  ivnisi42019,
  ivnisi62019,
  ivnisi62020,
  maisi172019,
  tebervali22019,
  weli2021,
} from "./data/data";
import TrainingsHeaders from "../../../../components/TrainingsHeaders";

const Page = () => {
  return (
    <>
      <head>
        <title>{`ტრენინგები | HPEP.GE`}</title>
      </head>
      <div className={"lt-container-small"}>
        <h2 className={"lt-page-h2 text-center pt-10"}>თრენინგები</h2>
        <div className={"mx-10"}>
          {/*          <div className={"mx-10 pb-16"}>
            <h2 className={"lt-page-h2 text-center"}>
              შრომის დაცვისა და ჯანმრთელობის უსაფრთხოების ტრენერთა ტრენინგი
            </h2>
            <div className={"pb-16"}>
              <p>
                პროექტი ხორციელდება საქართველოს რკინიგზისა და სტუ-ს მიერ US
                Millennium Challenge Corporation (MCC) მოპოვებული გრანტის
                ფარგლებში.
              </p>
              <p>
                აღნიშნული ტრეინინგებს საფუძვლად უდევს OSHA-ს სტანდარტები
                (OSHA-Occupational Safety and Health Administration ) აშშ-ის
                შრომის სამინისტროში არსებული სამმართველო, რომელიც ხელმძღვანელობს
                შრომის უსაფრთხოების დაცვისა და პროფესიული დაავადებების
                პროფილაქტიკის სფეროს. მისი ამოცანაა უზრუნველყოს შრომისა და
                ჯანმრთელობისთვის უსაფრთხო პირობები შრომის დაცვისა და
                უსაფრთხოების ტექნიკის სტანდარტების შემუშავებისა და მათი
                განხორციელების გზით (მათ შორის შემოწმებების წარმოებისა და
                ჯარიმების დაკისრების საშუალებით); აგრეთვე შეიმუშაოს სხვადასხვა
                საკანონმდებლო აქტები და აწარმოოს სწავლება).
              </p>
              <p>
                სტუ-ს, საქართველოსრკინიგზისა და აიოვას უნივერსიტეტებს შორის
                არსებული შეთანხმების თანახმად, ტრეინინგების კურსი მომზადებულია
                და ხელმისაწვდომი მხოლოდ საქართველოსთვის და ითვალისწინებს
                ტრენერთა მომზადებას შრომის პირობების უსაფრთხოების დაცვისა და
                პროფესიული დაავადებების პროფილაქტიკის სფეროში
              </p>
              <p>
                ტრეინინგების წარმატებით გავლის შემდგომ, ტრეინინგში მონაწილეები
                მიიღებენ შესაბამის სერტიფიკატს და თავად გახდებიან შრომის
                უსაფრთხოებისა და ჯანმრთელობის დაცვის პროგრამის ტრენერები
                მრეწველობის სხვადასხვა დარგებისთვის: მშენებლობა, ტრანსპორტი,
                ენერგეტიკა, მეტალურგია,სოფლის მეურნეობა და სხვა
              </p>
              <p>
                ტრეინინგების კურსი განსაზღვრულია საქართველოში არსებული
                მრეწველობის სხვადასხვა დარგის როგორც სამთავრობო, ასევე კერძო
                წარმოება-დაწესებულებების წარმომადგენლებისათვის, დარგობრივი
                სამინისტროებისა, არასამთავრობო ორგანიზაციებისა და პროფესიული
                ასოციაციებისთვის
              </p>
              <p>
                კურსს სალდებულოდ გაივლიან საქართველოს უნივერსიტეტებისა და
                პროფესიული კოლეჯების საგანმანათლებლო პროგრამების პედაგოგები,
                რომლებიც წარმართავენ ამ მიმართულების მოდულებს საგანმანათლებლო
                პროგრამებში, რაც გააუმჯობესებს როგორც მათი, ასევე ამ
                სასწავლებლების შესაბამისი პროგრამების კურსდამთავრებულების
                ცოდნასა და კომპეტენციებს
              </p>
            </div>
            <h3 className={"lt-page-h3"}>
              სტუ-ს მხრიდან ტრეინინგში მონაწილეობა მიიღეს და პირველი ეტაპის
              სერტიფიკატის მფლობელები გახდნენ, შემდეგი პროფესორ-მასწავლებლები და
              პროფესიული განვითარების ცენტრის თანამშრომლები:
            </h3>
            <div>
              <ol className={"lt-page-ul-ol-padding list-decimal"}>
                <li>ირმა ღარიბაშვილი</li>

                <li>ლია ბალანჩივაძე</li>

                <li>ია მშვიდობაძე</li>

                <li>თეა ნარეკლიშვილი</li>

                <li>ნინო რატიანი</li>

                <li>ნანა რაზმაძე</li>

                <li>ნაზი კუციავა</li>

                <li>ზურაბ ლომსაძე</li>

                <li>ლალი ღოღელიანი</li>

                <li>კონსტანტინე მაღრაძე</li>

                <li>ნიკოლოზ მიქავა</li>

                <li>ივერი ასანიძე</li>

                <li>ლაშა ტატულაშვილი</li>

                <li>ელინა ქრისტესიაშვილი</li>
              </ol>
            </div>
            <p>2018 წლის მაისში იგეგმება ტრენერთა ტრეინინგის მეორე ეტაპი</p>
          </div>
           // მეორე ბმული
          <div className={"mx-10 pb-16"}>
            <h2 className={"lt-page-h2 text-center"}>
              InWEnt თრენინგები ცენტრის თანამშრომლებისათვის
            </h2>
            <div>
              <h3 className={"lt-page-h3 font-normal"}>
                ტრეინინგი განხორციელდა InWent-ის მიერ (Capacity Building
                International Germany)
              </h3>

              <h4>მონაწილეები</h4>

              <p>ლალი ღოღელიანმა და თამარ ცერცვაძემ: სკოლის მენეჯმენტში</p>

              <p>
                მარინე ჭიჭინაძემ და ალექსანდრე დავითაშვილმა: პროფესიულ
                პედაგოგიკაში
              </p>
            </div>
          </div>
          */}
          {/*          <h3 className={"lt-page-h3"}>
            გორის კოლეჯი, ბათუმის საზღვაო კოლეჯი, რუსთავის მეტალურგიული კოლეჯი,
            თბილისის სახელმწიფო უნივერსიტეტი, თბილისის სამედიცინო უნივერსიტეტი,
            შავი ზღვის უნივერსიტეტი, ახალქალაქის უნივერსიტეტი, წნორის
            უნივერსიტეტი, გორის უნივერსიტეტი, შპს „ანრი - საზღვაო უნივერსიტეტი,
            ახალციხის უნივერსიტეტი.
          </h3>*/}
          <h3 className={"lt-page-h3 text-xl"}>
            თრენინგი "სწავლისა და სწავლების თანამედროვე მეთოდოლოგიები
            საუნივერსიტეტო განათლებაში"
          </h3>
          <div
            className={
              "lt-page-2grid lt-page-align-left-span-2 lt-page-text-bg-primary"
            }
          >
            <div>მერი ლოუ ლაუერ (აშშ)</div>

            <div>შედეგების მიღება</div>

            <div>მერი ლოუ ლაუერ (აშშ)</div>

            <div>სწავლა, სწავლება და შეფასება</div>

            <div>მერი ლოუ ლაუერ (აშშ)</div>

            <div>კოლეჯები</div>

            <div>სტივენ მაიკოლსონი (აშშ)</div>

            <div>სტუდენტების სწავლების სტილის გაგების მნიშვნელობა</div>

            <div>სტივენ მაიკოლსონი (აშშ)</div>

            <div>სასწავლო ჯგუფები</div>

            <div>სტივენ მაიკოლსონი (აშშ)</div>

            <div>კომპენტეციებზე დაფუძვნებული მიდგომა</div>

            <div>სტივენ მაიკოლსონი (აშშ)</div>

            <div>აბეტი მოდის</div>

            <div>არდიტ მენეი (აშშ)</div>

            <div>კურიკულუმის შექმნა კოლეჯებისთვის</div>

            <div>არდიტ მენეი (აშშ)</div>

            <div>
              პროფესიონალურ და სოციალური მიმართულებით მეცნიერებისა და ინჟინრების
              ტრენინგი ლიდერშიპში
            </div>

            <div>არდიტ მენეი (აშშ)</div>

            <div>ცვლილდბები და ლიდერშიპი უნივერსიტეტებში</div>

            <div>არდიტ მენეი (აშშ)</div>

            <div>
              მასწავლებელი/მოსწავლე: ლექციების ახალი მეთოდოლოგიები დანერგვა
            </div>

            <div>არდიტ მენეი (აშშ)</div>

            <div>ამერიკული საშუალო სკოლის შემდგომი განათლება დღეს</div>

            <div>არდიტ მენეი (აშშ)</div>

            <div>სწავლებისა და განათლების ცენტრი, რას ნიშნავს ეს</div>

            <div>ალექსანდრე დავითაშვილი (საქართველო)</div>

            <div>ბლუმის ტაქსონომია</div>

            <div>ალექსანდრე დავითაშვილი (საქართველო)</div>

            <div>სწავლების სწტილები</div>

            <div>ოთარ ზუმბურიძე (საქართველო)</div>

            <div>
              გაეროსა და იუნესკოს რეკომენდაციები უმაღლესი განათლების
              კვალიფიკაციაში
            </div>

            <div>ლალი ღოღელიანი (საქართველო)</div>

            <div>სწავლებისა და განათლების ცენტრები</div>

            <div>ბუციკო ჩხარტიშვილი (საქართველო)</div>

            <div>დაზეპრება და სწავლება</div>

            <div>ბუციკო ჩხარტიშვილი (საქართველო)</div>

            <div>შეფასების ფორმები და მეთოდები</div>

            <div>ვეიდ მილერი (აშშ)</div>

            <div>პრობლემაზე დაფუძვნებული სწავლა და სწავლება</div>

            <div>ნიკოლოზ აბზიანიძე (საქართველო)</div>

            <div>სილაბუსის შექმნა</div>

            <div>ლალი ღოღელიანი (საქართველო)</div>

            <div>კურიკულუმის შექმნა საიჯჟინრო სპეციალობებისათვის</div>

            <div>ლენა შატაკიშვილი (საქართველო)</div>

            <div>კომუნიკაციის როლი საზოგადოებაში</div>

            <div>ბელა ბესტავაშვილი (საქართველო)</div>

            <div>კომუნიკაციის როლი საზოგადოებაში</div>

            <div>თ. ცერცვაძე, ნ. ჯაფარიძე (საქართველო)</div>

            <div>კარიერის დაგეგმვა</div>

            <div>ბარბარა მათიესი (აშშ)</div>

            <div>ინგლისურის სწავლების მეთოდები</div>

            <div>მ. ჭიჭინაძე (საქართველო)</div>

            <div>რთული ქცევები</div>

            <div>ლალი ბაქრაძე (საქართველო)</div>

            <div>კურიკულუმის შექმნა</div>

            <div>ლალი ბაქრაძე (საქართველო)</div>

            <div>ტუნინგი</div>

            <div>ჯო მონაჰანი (აშშ)</div>

            <div>ტაბლეტური კომპიუტერის ტექნილოგია</div>

            <div>ალექსანდრე დავითაშვილი (საქართველო)</div>

            <div>ინტერნეტში მუშაობა და ელექტრონული ფოსტის გამოყენება</div>

            <div>ჯუზეპე ლიბერატორე (კანადა)</div>

            <div>ეკონომიკური განვითარება კანადაში</div>

            <div>ჯუზეპე ლიბერატორე (კანადა)</div>

            <div>გლობალური სტრატეგია</div>

            <div>ჯუზეპე ლიბერატორე (კანადა)</div>

            <div>გლობალური ბრენდინგი</div>

            <div>ვეიდ მილერი (აშშ)</div>

            <div>მცირე ბიზნესი აგრუკულტურაში</div>

            <div>ალექს სიმპსონი (კანადა)</div>

            <div>ბიზნესის ადმინისტრირება პატარა სამშენებლო კომპანიაში</div>

            <div>ბირდ ბერგი (დანია)</div>

            <div>ინოვაციაები წარმატებული სტუდენტების სტაჭირებაში</div>

            <div>ალექსანდრე დავითაშვილი (საქართველო)</div>

            <div>MS Project-თან მუშაობა</div>

            <div>მურმან კუბლაშვილი (საქართველო)</div>

            <div>AutoCad-თან მუშაობა</div>

            <div>ალექსანდრე დავითაშვილი (საქართველო)</div>

            <div>PowerPoint-თან მუშაობა</div>

            <div>ნინო ჩეჩელაშვილი (საქართველო)</div>

            <div>მათემატიკის სწავლების თანამედროვე მეთოდები</div>

            <div>კერენ კაშმანიან ოატესი (აშშ)</div>

            <div>
              სამეცნიერო განათლება ახალ სოციალურ ურთიერთობებსა და ვალდებულებებში
            </div>

            <div>კერენ კაშმანიან ოატესი (აშშ)</div>

            <div>
              „SENCER“-ის მოდელის კორესპროდენცია თანამედროვე და პერსპექტიულ
              ბაკალავრიატში
            </div>

            <div>კერენ კაშმანიან ოატესი (აშშ)</div>

            <div>სტრუქტურული რეფორმები ინოვაციების წახალისებისათვის</div>

            <div>ემი შაჩტერი (აშშ)</div>

            <div>სწავლება „SENCER“-ის კურსებში</div>

            <div>ეუგენია ეტკინა, ხოსე პ. მესტრე (აშშ)</div>

            <div>
              უკუმხარეების სასწავლო კვლევა, მეცნიერების სწავლების არამეცნიერი
              სტუდენტებისათვის
            </div>

            <div>სტივენ ფრიმანი (აშშ)</div>

            <div>სწავლობენ თუ არა სტუდენტები იმას რასაც ჩვენ ვასწვლით</div>

            <div>სტივენ ფრიმანი (აშშ)</div>

            <div>ლექციის დროის გამოყენება და შეფასების მეთოდები</div>

            <div>სტივენ ფრიმანი (აშშ)</div>

            <div>სტუდენტზე ორიენტირებული სწავლება</div>

            <div>სტივენ ფრიმანი (აშშ)</div>

            <div>სწავლების შვიდი პრინციპი</div>

            <div>გიორგი ჩიღლაძე (აშშ)</div>

            <div>სწავლებისა და განათლების ცენტრის მიზნები</div>

            <div>დავით ლ ტაუკი (აშშ)</div>

            <div>ფოკუსირება სწავლაზე სწავლების მაგიერ</div>
          </div>
        </div>
        <div className={"mx-10"}>
          <div>
            <TrainingsHeaders
              h2Header={
                "სწავლისა და სწავლების თანამედროვე მეთოდოლოგიები საუნუვერსიტეტო სწავლებაში"
              }
              h3Date={"2019 02 .01"}
              faculty={"სამშენებლო ფაკულტეტი"}
            />
            {/*<h2 className={"lt-page-h2"}>*/}
            {/*  თრენინგი “სწავლისა და სწავლების თანამედროვე მეთოდოლოგიები საუნუვერსიტეტო სწავლებაში” განხორციელდა:*/}
            {/*</h2>*/}
            {/*<h3 className={"lt-page-h3"}>*/}
            {/*  2019 წლის 02 .01*/}
            {/*  <br/>*/}
            {/*  სამშენებლო ფაკულტეტის შემდეგი აკადემიური პერსონალისთვის:*/}
            {/*</h3>*/}

            <div
              className={"grid grid-cols-[100px_100px_repeat(2,_1fr)] pb-16"}
            >
              <div className={"pb-4 font-bold"}>N</div>
              <div className={"pb-4 font-bold"}>სერთ.N</div>
              <div className={"pb-4 font-bold"}>სახელი, გვარი</div>
              <div className={"pb-4 font-bold"}>აკადემიური თანამდებობა</div>
              {ianvari22019.slice(1).map((dat) => (
                <>
                  <div>{dat.number}</div>
                  <div>{dat.cert}</div>
                  <div>{dat.name}</div>
                  <div>{dat.role}</div>
                </>
              ))}
            </div>
          </div>
          <div>
            <TrainingsHeaders
              h2Header={
                "სწავლისა და სწავლების თანამედროვე მეთოდოლოგიები საუნუვერსიტეტო სწავლებაში"
              }
              h3Date={"2019 02 .01"}
              faculty={"ბიზნესტექნოლოგიების ფაკულტეტი"}
            />
            <div
              className={"grid grid-cols-[100px_100px_repeat(2,_1fr)] pb-16"}
            >
              <div className={"pb-4 font-bold"}>N</div>
              <div className={"pb-4 font-bold"}>სერთ.N</div>
              <div className={"pb-4 font-bold"}>სახელი, გვარი</div>
              <div className={"pb-4 font-bold"}>აკადემიური თანამდებობა</div>
              {ianvari312019.slice(1).map((dat) => (
                <>
                  <div>{dat.number}</div>
                  <div>{dat.cert}</div>
                  <div>{dat.name}</div>
                  <div>{dat.role}</div>
                </>
              ))}
            </div>
          </div>
          <div>
            <TrainingsHeaders
              h2Header={
                "კომუნიკაცია და კოგნიცია"
              }
              h3Date={"2019 02 .02"}
              faculty={"ბიზნესტექნოლოგიების ფაკულტეტი"}
            />
            <div
              className={"grid grid-cols-[100px_100px_repeat(2,_1fr)] pb-16"}
            >
              <div className={"pb-4 font-bold"}>N</div>
              <div className={"pb-4 font-bold"}>სერთ.N</div>
              <div className={"pb-4 font-bold"}>სახელი, გვარი</div>
              <div className={"pb-4 font-bold"}>აკადემიური თანამდებობა</div>
              {tebervali22019.slice(1).map((dat) => (
                <>
                  <div>{dat.number}</div>
                  <div>{dat.cert}</div>
                  <div>{dat.name}</div>
                  <div>{dat.role}</div>
                </>
              ))}
            </div>
          </div>
          <div>
            <TrainingsHeaders
              h2Header={
                "სწავლის შედეგები და მათი შეფასება"
              }
              h3Date={"2019 05 .17"}
              faculty={"ბიზნესტექნოლოგიების ფაკულტეტი"}
            />

            <div
              className={"grid grid-cols-[100px_100px_repeat(2,_1fr)] pb-16"}
            >
              <div className={"pb-4 font-bold"}>N</div>
              <div className={"pb-4 font-bold"}>სერთ.N</div>
              <div className={"pb-4 font-bold"}>სახელი, გვარი</div>
              <div className={"pb-4 font-bold"}>აკადემიური თანამდებობა</div>
              {maisi172019.slice(1).map((dat) => (
                <>
                  <div>{dat.number}</div>
                  <div>{dat.cert}</div>
                  <div>{dat.name}</div>
                  <div>{dat.role}</div>
                </>
              ))}
            </div>
          </div>
          <div>
            <TrainingsHeaders
              h2Header={
                "სწავლისა და სწავლების თანამედროვე მეთოდოლოგიები საუნივერსიტეტი განათლებაში"
              }
              h3Date={"2019 06 .04"}
              faculty={"სამშენებლო ფაკულტეტი"}
            />
            <div
              className={"grid grid-cols-[100px_100px_repeat(2,_1fr)] pb-16"}
            >
              <div className={"pb-4 font-bold"}>N</div>
              <div className={"pb-4 font-bold"}>სერთ.N</div>
              <div className={"pb-4 font-bold"}>სახელი, გვარი</div>
              <div className={"pb-4 font-bold"}>აკადემიური თანამდებობა</div>
              {ivnisi42019.slice(1).map((dat) => (
                <>
                  <div>{dat.number}</div>
                  <div>{dat.cert}</div>
                  <div>{dat.name}</div>
                  <div>{dat.role}</div>
                </>
              ))}
            </div>
          </div>
          <div>
            <TrainingsHeaders
              h2Header={
                "კომუნიკაცია და კოგნიცია"
              }
              h3Date={"2019 06 .06"}
              faculty={"ბიზნესტექნოლოგიების ფაკულტეტი"}
            />

            <div
              className={"grid grid-cols-[100px_100px_repeat(2,_1fr)] pb-16"}
            >
              <div className={"pb-4 font-bold"}>N</div>
              <div className={"pb-4 font-bold"}>სერთ.N</div>
              <div className={"pb-4 font-bold"}>სახელი, გვარი</div>
              <div className={"pb-4 font-bold"}>აკადემიური თანამდებობა</div>
              {ivnisi62019.slice(1).map((dat) => (
                <>
                  <div>{dat.number}</div>
                  <div>{dat.cert}</div>
                  <div>{dat.name}</div>
                  <div>{dat.role}</div>
                </>
              ))}
            </div>
          </div>
          <div>
            <TrainingsHeaders
              h2Header={
                "სწავლისა და სწავლების თანამედროვე მეთოდოლოგიები საუნივერსიტეტი განათლებაში"
              }
              h3Date={"2020 06 .07"}
              faculty={"სატრანსპორტო და მანქანათმშენებლობის ფაკულტეტი"}
            />

            <div
              className={"grid grid-cols-[100px_100px_repeat(2,_1fr)] pb-16"}
            >
              <div className={"pb-4 font-bold"}>N</div>
              <div className={"pb-4 font-bold"}>სერთ.N</div>
              <div className={"pb-4 font-bold"}>სახელი, გვარი</div>
              <div className={"pb-4 font-bold"}>აკადემიური თანამდებობა</div>
              {ivnisi62020.slice(1).map((dat) => (
                <>
                  <div>{dat.number}</div>
                  <div>{dat.cert}</div>
                  <div>{dat.name}</div>
                  <div>{dat.role}</div>
                </>
              ))}
            </div>
          </div>
          <div>
            <TrainingsHeaders
              h2Header={
                "სწავლისა და სწავლების თანამედროვე მეთოდოლოგიები საუნივერსიტეტი განათლებაში"
              }
              h3Date={"2020 06 .22"}
              faculty={"სატრანსპორტო და მანქანათმშენებლობის ფაკულტეტი"}
            />

            <div
              className={"grid grid-cols-[100px_100px_repeat(2,_1fr)] pb-16"}
            >
              <div className={"pb-4 font-bold"}>N</div>
              <div className={"pb-4 font-bold"}>სერთ.N</div>
              <div className={"pb-4 font-bold"}>სახელი, გვარი</div>
              <div className={"pb-4 font-bold"}>აკადემიური თანამდებობა</div>
              {ivnisi222020.slice(1).map((dat) => (
                <>
                  <div>{dat.number}</div>
                  <div>{dat.cert}</div>
                  <div>{dat.name}</div>
                  <div>{dat.role}</div>
                </>
              ))}
            </div>
          </div>
          <div>
            <TrainingsHeaders
              h2Header={
                "სწავლისა და სწავლების თანამედროვე მეთოდოლოგიები საუნივერსიტეტი განათლებაში"
              }
              h3Date={"2021 01 .03"}
              faculty={"სატრანსპორტო ფაკულტეტი"}
            />

            <div
              className={"grid grid-cols-[100px_100px_repeat(2,_1fr)] pb-16"}
            >
              <div className={"pb-4 font-bold"}>N</div>
              <div className={"pb-4 font-bold"}>სერთ.N</div>
              <div className={"pb-4 font-bold"}>სახელი, გვარი</div>
              <div className={"pb-4 font-bold"}>აკადემიური თანამდებობა</div>
              {ianvari32021.slice(1).map((dat) => (
                <>
                  <div>{dat.number}</div>
                  <div>{dat.cert}</div>
                  <div>{dat.name}</div>
                  <div>{dat.role}</div>
                </>
              ))}
            </div>
          </div>
          <div>
            <TrainingsHeaders
              h2Header={
                "კარიერული ზრდა"
              }
              h3Date={"2021 06 .27"}
              faculty={"ბიზნესტექნოლოგიების ფაკულტეტი"}
            />
            <div
              className={"grid grid-cols-[100px_100px_repeat(2,_1fr)] pb-16"}
            >
              <div className={"pb-4 font-bold"}>N</div>
              <div className={"pb-4 font-bold"}>სერთ.N</div>
              <div className={"pb-4 font-bold"}>სახელი, გვარი</div>
              <div className={"pb-4 font-bold"}>აკადემიური თანამდებობა</div>
              {ivnisi272021.slice(1).map((dat) => (
                <>
                  <div>{dat.number}</div>
                  <div>{dat.cert}</div>
                  <div>{dat.name}</div>
                  <div>{dat.role}</div>
                </>
              ))}
            </div>
          </div>
          <div>
            <TrainingsHeaders
              h2Header={
                "სწავლისა და სწავლების თანამედროვე მეთოდოლოგიები საუნივერსიტეტი განათლებაში"
              }
              h3Date={"2021"}
              faculty={"ბიზნესტექნოლოგიების ფაკულტეტი"}
            />

            <div
              className={"grid grid-cols-[100px_100px_repeat(2,_1fr)] pb-16"}
            >
              <div className={"pb-4 font-bold"}>N</div>
              <div className={"pb-4 font-bold"}>სერთ.N</div>
              <div className={"pb-4 font-bold"}>სახელი, გვარი</div>
              <div className={"pb-4 font-bold"}>აკადემიური თანამდებობა</div>
              {weli2021.slice(1).map((dat) => (
                <>
                  <div>{dat.number}</div>
                  <div>{dat.cert}</div>
                  <div>{dat.name}</div>
                  <div>{dat.role}</div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
