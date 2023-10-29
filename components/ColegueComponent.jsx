const ColegueComponent = ({ name, img, className = "", rank }) => {
  return (
    <div className={className}>
      <img
        src={img}
        alt="colegue"
        className={"relative mx-auto h-32 w-32 rounded-full"}
      />
      <h1 className={"lt-page-h3 p-0 text-center text-xl text-primary"}>
        {name}
      </h1>
      <h2 className={"lt-page-h2 pb-8  text-center text-xl text-primary"}>
        {rank}
      </h2>
    </div>
  );
};

export default ColegueComponent;
