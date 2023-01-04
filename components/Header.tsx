import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"
            width={50}
            className="rounded-full"
            height={50}
            alt="logo"
          />
        </Link>
        <h1>You to Us Blogs</h1>
        </div>

        <div>
        <Link
          href="studio"
          className="px-5 py-3 text-sm md:text-base bg-gray-800 text-[#fdfdfd] flex items-center rounded-full text-center"
        >
          Click Here to Start Creating
        </Link>
        </div>
    </header>
  )
}

export default Header