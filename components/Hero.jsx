const Hero = () => {
  return (
    <div className={'h-screen'}>
      {/*with old bg*/}
      {/*<div*/}
      {/*  className="hero min-h-[90vh] bg-[#A63131]"*/}
      {/*  style={{ backgroundImage: `url("https://i.imgur.com/5bIojeo.jpg")` }}*/}
      {/*>*/}

      <div className="hero h-full bg-[#A63131]">
        <img
          src={"https://i.imgur.com/nTqXW6U.png"}
          height={500}
          width={500}
          className={"pb-4"}
          alt={"hpep logo"}
        />
        {/*<div className="hero-content text-center text-white">*/}
        {/*  <div className="max-w-96">*/}
        {/*    /!*<h1 className="mb-5 text-5xl font-bold">*!/*/}
        {/*    /!*  საქართველოს ტექნიკური უნივერსიტეტის აკადემიური და მასწავლებელთა*!/*/}
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

export default Hero
