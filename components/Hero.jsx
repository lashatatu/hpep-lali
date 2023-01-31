const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-[90vh]"
        style={{ backgroundImage: `url("https://i.imgur.com/5bIojeo.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">აქ იქნება სლოგანი</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn font-bold">დაწყება</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
