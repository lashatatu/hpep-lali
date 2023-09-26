import Image from "next/image";
import Link from 'next/link'

const Hero = () => {
  return (
    <div className={"h-screen"}>
      {/*with old bg*/}
      {/*<div*/}
      {/*  className="hero min-h-[90vh] bg-[#A63131]"*/}
      {/*  style={{ backgroundImage: `url("https://i.imgur.com/5bIojeo.jpg")` }}*/}
      {/*>*/}

      {/*<div className="hero h-full bg-[#A63131]">*/}
      <div className="hero relative">
        {/*<Image*/}
        {/*  // src={"https://i.imgur.com/nTqXW6U.png"}*/}
        {/*  src={"https://i.imgur.com/nnanz0C.jpg"}*/}
        {/*  // width={500}*/}
        {/*  // height={500}*/}
        {/*  fill={true}*/}
        {/*  className={"h-full w-full object-cover pb-4"}*/}
        {/*  alt={"hpep logo"}*/}
        {/*/>*/}
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.imgur.com/nnanz0C.jpg)'}}>~
          <div className="hero-overlay"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-xl">
              <h1 className={'lt-page-h1'}>აკადემიური და მასწავლებელთა პერსონალის გადამზადების ცენტრი</h1>
              <Link href={'/administration/about'} className="btn bg-white text-primary hover:bg-primary hover:text-white rounded-3xl border-primary">ჩვენს შესახებ</Link>
            </div>
          </div>
        </div>
        {/*<div className="hero min-h-screen" >*/}
          {/*<Image  src={'https://i.imgur.com/Snij1lo.jpg'} alt={'bg image'} fill={true} className={'w-full object-cover contrast-100'}/>*/}
        {/*<div className="hero-content text-center text-white">*/}
        {/*  <div className="max-w-96">*/}
        {/*    /!*<h1 className="mb-5 text-5xl font-bold">*!/*/}
        {/*    /!* asd საქართველოს ტექნიკური უნივერსიტეტის აკადემიური და მასწავლებელთა*!/*/}
        {/*    /!*  პერსონალის გადამზადების ცენტრი*!/*/}
        {/*    /!*</h1>*!/*/}
        {/*    /!*<p className="mb-5"></p>*!/*/}
        {/*    /!*<button className="btn font-bold">დაწყება</button>*!/*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Hero;
