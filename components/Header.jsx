import Link from "next/link";
import LinksComponent from "./LinksComponent";
import LinksComponentMobile from "./LinksComponentMobile";

const Header = () => {
  return (
    <>
      {/*<header*/}
      {/*  className={*/}
      {/*    "flex flex-col justify-between items-center font-bold p-5 text-white bg-primary"*/}
      {/*  }*/}
      {/*>*/}
      {/*  <div*/}
      {/*    className={*/}
      {/*      "flex flex-col items-center justify-between font-bold p-5 text-white"*/}
      {/*    }*/}
      {/*  >*/}
      {/*    <Link href="/">*/}
      {/*      <img*/}
      {/*        src={"https://i.imgur.com/rg1y2ro.gif"}*/}
      {/*        height={50}*/}
      {/*        width={50}*/}
      {/*        className={"pb-4"}*/}
      {/*        alt={"hpep logo"}*/}
      {/*      />*/}
      {/*    </Link>*/}
      {/*    <div>*/}
      {/*      <div className={"space-x-2 cursor-pointer hidden lg:flex"}>*/}
      {/*        <LinksComponent />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  /!* Mobile *!/*/}

      {/*  <div className="collapse lg:hidden" tabIndex={0}>*/}
      {/*    <input type="checkbox" className="peer" />*/}
      {/*    <div className="collapse-title flex p-1">*/}
      {/*      <svg*/}
      {/*        xmlns="http://www.w3.org/2000/svg"*/}
      {/*        fill="none"*/}
      {/*        viewBox="0 0 24 24"*/}
      {/*        strokeWidth="1.5"*/}
      {/*        stroke="currentColor"*/}
      {/*        className="h-10 w-10 flex-1"*/}
      {/*      >*/}
      {/*        <path*/}
      {/*          strokeLinecap="round"*/}
      {/*          strokeLinejoin="round"*/}
      {/*          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"*/}
      {/*        />*/}
      {/*      </svg>*/}
      {/*    </div>*/}
      {/*    <div className="collapse-content m-0">*/}
      {/*      <div className="cursor-pointer flex flex-col items-center">*/}
      {/*        <LinksComponent />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</header>*/}
      <div>
        <label className="swap inline max-lg:hidden lg:swap-active">
          <div className="swap-on flex flex-col items-center bg-primary p-5 font-bold text-white">
            <Link href="/">
              <img
                src={"/headerLogo-v2.jpg"}
                height={450}
                width={450}
                className={"pb-4"}
                alt={"hpep logo"}
              />
            </Link>
          </div>
        </label>
      </div>
      <header className={"sticky top-0 z-10"}>
        <label className="swap inline max-lg:hidden lg:swap-active">
          <div className="swap-on flex flex-col items-center bg-primary p-5 font-bold text-white">
            <div className={"relative"}>
              {/*<div className={"hidden fixed left-1/2 -translate-x-1/2 cursor-pointer space-x-2 lg:flex bg-primary rounded z-10"}>*/}
              {/*  <LinksComponent />*/}
              {/*</div>*/}
              <div
                className={
                  "z-10 hidden cursor-pointer space-x-2 rounded bg-primary lg:flex"
                }
              >
                <LinksComponent />
              </div>
            </div>
          </div>
        </label>
      </header>

      {/* Mobile */}

      <header>
        <label className="swap inline max-lg:swap-active lg:hidden">
          <div className="swap-on flex flex-col items-center bg-primary p-5 font-bold text-white">
            <Link href="/">
              <img
                src={"/headerLogo-v2.jpg"}
                height={550}
                width={550}
                className={"pb-4"}
                alt={"hpep logo"}
              />
            </Link>
            <div className="collapse lg:hidden" tabIndex={0}>
              <input type="checkbox" className="peer" />
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
                <div className="flex cursor-pointer flex-col items-center">
                  <LinksComponentMobile />
                </div>
              </div>
            </div>
          </div>
        </label>
      </header>
    </>
  );
};

export default Header;
