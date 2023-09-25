import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const studioNavbar = (props: any) => {
  return (
    <div>
      <div className={"flex items-center justify-between p-5"}>
        <Link href={"/"} className={"flex items-center text-primary"}>
          <ArrowUturnLeftIcon className={"mr-2 h-6 w-6 text-primary"} />
          საიტზე დაბრუნება
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default studioNavbar;
