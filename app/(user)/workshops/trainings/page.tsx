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
        <h2 className={"lt-page-h2 pt-10 text-center"}>თრენინგები</h2>
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
            <div  className={"font-bold"}>მერი ლოუ ლაუერ (აშშ)</div>

            <div  className={"font-bold"}>შედეგების მიღება</div>

            <div  className={"font-bold"}>მერი ლოუ ლაუერ (აშშ)</div>

            <div  className={"font-bold"}>სწავლა, სწავლება და შეფასება</div>

            <div  className={"font-bold"}>მერი ლოუ ლაუერ (აშშ)</div>

            <div  className={"font-bold"}>კოლეჯები</div>

            <div  className={"font-bold"}>სტივენ მაიკოლსონი (აშშ)</div>

            <div  className={"font-bold"}>სტუდენტების სწავლების სტილის გაგების მნიშვნელობა</div>

            <div  className={"font-bold"}>სტივენ მაიკოლსონი (აშშ)</div>

            <div  className={"font-bold"}>სასწავლო ჯგუფები</div>

            <div  className={"font-bold"}>სტივენ მაიკოლსონი (აშშ)</div>

            <div  className={"font-bold"}>კომპენტეციებზე დაფუძვნებული მიდგომა</div>

            <div  className={"font-bold"}>სტივენ მაიკოლსონი (აშშ)</div>

            <div  className={"font-bold"}>აბეტი მოდის</div>

            <div  className={"font-bold"}>არდიტ მენეი (აშშ)</div>

            <div  className={"font-bold"}>კურიკულუმის შექმნა კოლეჯებისთვის</div>

            <div  className={"font-bold"}>არდიტ მენეი (აშშ)</div>

            <div  className={"font-bold"}>
              პროფესიონალურ და სოციალური მიმართულებით მეცნიერებისა და ინჟინრების
              თრენინგი ლიდერშიპში
            </div>

            <div  className={"font-bold"}>არდიტ მენეი (აშშ)</div>

            <div  className={"font-bold"}>ცვლილდბები და ლიდერშიპი უნივერსიტეტებში</div>

            <div  className={"font-bold"}>არდიტ მენეი (აშშ)</div>

            <div  className={"font-bold"}>
              მასწავლებელი/მოსწავლე: ლექციების ახალი მეთოდოლოგიები დანერგვა
            </div>

            <div  className={"font-bold"}>არდიტ მენეი (აშშ)</div>

            <div  className={"font-bold"}>ამერიკული საშუალო სკოლის შემდგომი განათლება დღეს</div>

            <div  className={"font-bold"}>არდიტ მენეი (აშშ)</div>

            <div  className={"font-bold"}>სწავლებისა და განათლების ცენტრი, რას ნიშნავს ეს</div>

            <div  className={"font-bold"}>ალექსანდრე დავითაშვილი (საქართველო)</div>

            <div  className={"font-bold"}>ბლუმის ტაქსონომია</div>

            <div  className={"font-bold"}>ალექსანდრე დავითაშვილი (საქართველო)</div>

            <div  className={"font-bold"}>სწავლების სწტილები</div>

            <div  className={"font-bold"}>ოთარ ზუმბურიძე (საქართველო)</div>

            <div  className={"font-bold"}>
              გაეროსა და იუნესკოს რეკომენდაციები უმაღლესი განათლების
              კვალიფიკაციაში
            </div>

            <div  className={"font-bold"}>ლალი ღოღელიანი (საქართველო)</div>

            <div  className={"font-bold"}>სწავლებისა და განათლების ცენტრები</div>

            <div  className={"font-bold"}>ბუციკო ჩხარტიშვილი (საქართველო)</div>

            <div  className={"font-bold"}>დაზეპრება და სწავლება</div>

            <div  className={"font-bold"}>ბუციკო ჩხარტიშვილი (საქართველო)</div>

            <div  className={"font-bold"}>შეფასების ფორმები და მეთოდები</div>

            <div  className={"font-bold"}>ვეიდ მილერი (აშშ)</div>

            <div  className={"font-bold"}>პრობლემაზე დაფუძვნებული სწავლა და სწავლება</div>

            <div  className={"font-bold"}>ნიკოლოზ აბზიანიძე (საქართველო)</div>

            <div  className={"font-bold"}>სილაბუსის შექმნა</div>

            <div  className={"font-bold"}>ლალი ღოღელიანი (საქართველო)</div>

            <div  className={"font-bold"}>კურიკულუმის შექმნა საიჯჟინრო სპეციალობებისათვის</div>

            <div  className={"font-bold"}>ლენა შატაკიშვილი (საქართველო)</div>

            <div  className={"font-bold"}>კომუნიკაციის როლი საზოგადოებაში</div>

            <div  className={"font-bold"}>ბელა ბესტავაშვილი (საქართველო)</div>

            <div  className={"font-bold"}>კომუნიკაციის როლი საზოგადოებაში</div>

            <div  className={"font-bold"}>თ. ცერცვაძე, ნ. ჯაფარიძე (საქართველო)</div>

            <div  className={"font-bold"}>კარიერის დაგეგმვა</div>

            <div  className={"font-bold"}>ბარბარა მათიესი (აშშ)</div>

            <div  className={"font-bold"}>ინგლისურის სწავლების მეთოდები</div>

            <div  className={"font-bold"}>მ. ჭიჭინაძე (საქართველო)</div>

            <div  className={"font-bold"}>რთული ქცევები</div>

            <div  className={"font-bold"}>ლალი ბაქრაძე (საქართველო)</div>

            <div  className={"font-bold"}>კურიკულუმის შექმნა</div>

            <div  className={"font-bold"}>ლალი ბაქრაძე (საქართველო)</div>

            <div  className={"font-bold"}>ტუნინგი</div>

            <div  className={"font-bold"}>ჯო მონაჰანი (აშშ)</div>

            <div  className={"font-bold"}>ტაბლეტური კომპიუტერის ტექნილოგია</div>

            <div  className={"font-bold"}>ალექსანდრე დავითაშვილი (საქართველო)</div>

            <div  className={"font-bold"}>ინტერნეტში მუშაობა და ელექტრონული ფოსტის გამოყენება</div>

            <div  className={"font-bold"}>ჯუზეპე ლიბერატორე (კანადა)</div>

            <div  className={"font-bold"}>ეკონომიკური განვითარება კანადაში</div>

            <div  className={"font-bold"}>ჯუზეპე ლიბერატორე (კანადა)</div>

            <div  className={"font-bold"}>გლობალური სტრატეგია</div>

            <div  className={"font-bold"}>ჯუზეპე ლიბერატორე (კანადა)</div>

            <div  className={"font-bold"}>გლობალური ბრენდინგი</div>

            <div  className={"font-bold"}>ვეიდ მილერი (აშშ)</div>

            <div  className={"font-bold"}>მცირე ბიზნესი აგრუკულტურაში</div>

            <div  className={"font-bold"}>ალექს სიმპსონი (კანადა)</div>

            <div  className={"font-bold"}>ბიზნესის ადმინისტრირება პატარა სამშენებლო კომპანიაში</div>

            <div  className={"font-bold"}>ბირდ ბერგი (დანია)</div>

            <div  className={"font-bold"}>ინოვაციაები წარმატებული სტუდენტების სტაჭირებაში</div>

            <div  className={"font-bold"}>ალექსანდრე დავითაშვილი (საქართველო)</div>

            <div  className={"font-bold"}>MS Project-თან მუშაობა</div>

            <div  className={"font-bold"}>მურმან კუბლაშვილი (საქართველო)</div>

            <div  className={"font-bold"}>AutoCad-თან მუშაობა</div>

            <div  className={"font-bold"}>ალექსანდრე დავითაშვილი (საქართველო)</div>

            <div  className={"font-bold"}>PowerPoint-თან მუშაობა</div>

            <div  className={"font-bold"}>ნინო ჩეჩელაშვილი (საქართველო)</div>

            <div  className={"font-bold"}>მათემატიკის სწავლების თანამედროვე მეთოდები</div>

            <div  className={"font-bold"}>კერენ კაშმანიან ოატესი (აშშ)</div>

            <div  className={"font-bold"}>
              სამეცნიერო განათლება ახალ სოციალურ ურთიერთობებსა და ვალდებულებებში
            </div>

            <div  className={"font-bold"}>კერენ კაშმანიან ოატესი (აშშ)</div>

            <div  className={"font-bold"}>
              „SENCER“-ის მოდელის კორესპროდენცია თანამედროვე და პერსპექტიულ
              ბაკალავრიატში
            </div>

            <div  className={"font-bold"}>კერენ კაშმანიან ოატესი (აშშ)</div>

            <div  className={"font-bold"}>სტრუქტურული რეფორმები ინოვაციების წახალისებისათვის</div>

            <div  className={"font-bold"}>ემი შაჩტერი (აშშ)</div>

            <div  className={"font-bold"}>სწავლება „SENCER“-ის კურსებში</div>

            <div  className={"font-bold"}>ეუგენია ეტკინა, ხოსე პ. მესტრე (აშშ)</div>

            <div  className={"font-bold"}>
              უკუმხარეების სასწავლო კვლევა, მეცნიერების სწავლების არამეცნიერი
              სტუდენტებისათვის
            </div>

            <div  className={"font-bold"}>სტივენ ფრიმანი (აშშ)</div>

            <div  className={"font-bold"}>სწავლობენ თუ არა სტუდენტები იმას რასაც ჩვენ ვასწვლით</div>

            <div  className={"font-bold"}>სტივენ ფრიმანი (აშშ)</div>

            <div  className={"font-bold"}>ლექციის დროის გამოყენება და შეფასების მეთოდები</div>

            <div  className={"font-bold"}>სტივენ ფრიმანი (აშშ)</div>

            <div  className={"font-bold"}>სტუდენტზე ორიენტირებული სწავლება</div>

            <div  className={"font-bold"}>სტივენ ფრიმანი (აშშ)</div>

            <div  className={"font-bold"}>სწავლების შვიდი პრინციპი</div>

            <div  className={"font-bold"}>გიორგი ჩიღლაძე (აშშ)</div>

            <div  className={"font-bold"}>სწავლებისა და განათლების ცენტრის მიზნები</div>

            <div  className={"font-bold"}>დავით ლ ტაუკი (აშშ)</div>

            <div  className={"font-bold"}>ფოკუსირება სწავლაზე სწავლების მაგიერ</div>
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
                  <div  className={"font-bold"}>{dat.number}</div>
                  <div  className={"font-bold"}>{dat.cert}</div>
                  <div  className={"font-bold"}>{dat.name}</div>
                  <div  className={"font-bold"}>{dat.role}</div>
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
                  <div  className={"font-bold"}>{dat.number}</div>
                  <div  className={"font-bold"}>{dat.cert}</div>
                  <div  className={"font-bold"}>{dat.name}</div>
                  <div  className={"font-bold"}>{dat.role}</div>
                </>
              ))}
            </div>
          </div>
          <div>
            <TrainingsHeaders
              h2Header={"კომუნიკაცია და კოგნიცია"}
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
                  <div  className={"font-bold"}>{dat.number}</div>
                  <div  className={"font-bold"}>{dat.cert}</div>
                  <div  className={"font-bold"}>{dat.name}</div>
                  <div  className={"font-bold"}>{dat.role}</div>
                </>
              ))}
            </div>
          </div>
          <div>
            <TrainingsHeaders
              h2Header={"სწავლის შედეგები და მათი შეფასება"}
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
                  <div  className={"font-bold"}>{dat.number}</div>
                  <div  className={"font-bold"}>{dat.cert}</div>
                  <div  className={"font-bold"}>{dat.name}</div>
                  <div  className={"font-bold"}>{dat.role}</div>
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
                  <div  className={"font-bold"}>{dat.number}</div>
                  <div  className={"font-bold"}>{dat.cert}</div>
                  <div  className={"font-bold"}>{dat.name}</div>
                  <div  className={"font-bold"}>{dat.role}</div>
                </>
              ))}
            </div>
          </div>
          <div>
            <TrainingsHeaders
              h2Header={"კომუნიკაცია და კოგნიცია"}
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
                  <div  className={"font-bold"}>{dat.number}</div>
                  <div  className={"font-bold"}>{dat.cert}</div>
                  <div  className={"font-bold"}>{dat.name}</div>
                  <div  className={"font-bold"}>{dat.role}</div>
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
                  <div className={"font-bold"}>{dat.number}</div>
                  <div className={"font-bold"}>{dat.cert}</div>
                  <div className={"font-bold"}>{dat.name}</div>
                  <div className={"font-bold"}>{dat.role}</div>
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
                  <div className={"font-bold"}>{dat.number}</div>
                  <div className={"font-bold"}>{dat.cert}</div>
                  <div className={"font-bold"}>{dat.name}</div>
                  <div className={"font-bold"}>{dat.role}</div>
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
                  <div className={"font-bold"}>{dat.number}</div>
                  <div className={"font-bold"}>{dat.cert}</div>
                  <div className={"font-bold"}>{dat.name}</div>
                  <div className={"font-bold"}>{dat.role}</div>
                </>
              ))}
            </div>
          </div>
          <div>
            <TrainingsHeaders
              h2Header={"კარიერული ზრდა"}
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
                  <div className={"font-bold"}>{dat.number}</div>
                  <div className={"font-bold"}>{dat.cert}</div>
                  <div className={"font-bold"}>{dat.name}</div>
                  <div className={"font-bold"}>{dat.role}</div>
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
                  <div className={"font-bold"}>{dat.number}</div>
                  <div className={"font-bold"}>{dat.cert}</div>
                  <div className={"font-bold"}>{dat.name}</div>
                  <div className={"font-bold"}>{dat.role}</div>
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
