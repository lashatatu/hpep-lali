const ColegueComponent = ({ name, img, className='' }) => {
  return (
    <div className={className}>
      <img
        src={img}
        alt="colegue"
        className={"relative mx-auto h-32 w-32 rounded-full"}
      />
      <h1 className={"lt-page-h3 pt-8 text-center text-primary"}>{name}</h1>
    </div>
  );
};

export default ColegueComponent;
