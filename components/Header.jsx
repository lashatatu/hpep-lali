
const Header = () => {
  return (
    <>
      <header
        className={
          "flex flex-col justify-between items-center font-bold p-5 text-white bg-[#A31E23]"
        }
      >
        <div
          className={
            "flex flex-col items-center justify-between font-bold p-5 text-white"
          }
        >
          {/*<Image src={HpepLogo} height={50} width={50} className={"pb-4"}  alt={'hpep logo'}/>*/}
          <div>
            <ul className={"space-x-2 cursor-pointer hidden lg:flex"}>
              <li>მთავარი</li>
              <li>ადმინისტრაცია</li>
              <li>ვორქშოპები</li>
              <li>პროექტები</li>
              <li>ბიბლიოთეკა</li>
              <li>რესურსები</li>
              <li>პარტნიორები</li>
            </ul>
          </div>
        </div>
        <div className="collapse lg:hidden" tabIndex={0}>
          {/*<input type="checkbox" className="peer" />*/}
          <div className="collapse-title flex p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-10 w-10 flex-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
          <div className="collapse-content m-0">
            <ul className="cursor-pointer flex flex-col items-center">
              <li>მთავარი</li>
              <li>ადმინისტრაცია</li>
              <li>ვორქშოპები</li>
              <li>პროექტები</li>
              <li>ბიბლიოთეკა</li>
              <li>რესურსები</li>
              <li>პარტნიორები</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
