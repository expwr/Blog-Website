import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

// Adds markup and invokes renderDefault()
function MyEnhancedNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#86c44d] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#86c44d] mr-2" />
          Go to Website
        </Link>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#86c44d]">
          <h1 className="font-bold text-white">
            Want to Start Creating Videos Click Here? 👉
          </h1>
          <Link
            href="https://www.youtube.com"
            className="text-[#86c44d] font-bold ml-2"
          >
            www.tutorials.com
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default MyEnhancedNavbar;