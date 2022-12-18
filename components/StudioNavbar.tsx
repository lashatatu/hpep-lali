import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from 'next/link'

const studioNavbar = (props: any) => {
  return (
    <div>
      <div className={'flex items-center justify-between p-5'}>
        <Link href={'/'} className={'text-[#A31E23] flex items-center'}>
          <ArrowUturnLeftIcon className={'h-6 w-6 text-[#A31E23] mr-2'} />
          საიზე დაბრუნება
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default studioNavbar;
