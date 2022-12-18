import Image from "next/image";
import LogoImage from "../public/gtu-logo.svg";

const logo = (props: any) => {
  const { renderDefault } = props;

  return (
    <div className={'flex items-center space-x-2'}>
      <Image
        src={LogoImage}
        width={"50"}
        height={"50"}
        alt="logo"
        className={"rounded-full object-cover"}
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
};

export default logo;
