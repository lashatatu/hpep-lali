const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-[90vh]"
        style={{ backgroundImage: `url("https://i.imgur.com/5bIojeo.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-96">
            <h1 className="mb-5 text-5xl font-bold">საქართველოს ტექნიკური უნივერსიტეტის პროფესიული განვითარების ცენტრი</h1>
            <p className="mb-5">

            </p>
            <button className="btn font-bold">დაწყება</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
