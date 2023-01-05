import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://images.unsplash.com/photo-1573848953384-3be02021eb0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            width={50}
            className="rounded-full"
            height={50}
            alt="logo"
          />
        </Link>
        <h1>Technology</h1>
        </div>

        <div>
        <Link
          href="studio"
          className="px-5 py-3 text-sm md:text-base bg-sky-700 text-[#fdfdfd] flex items-center rounded-full text-center dark:md:hover:bg-sky-600"
        >
          Click Here to Start Creating
        </Link>
        </div>
    </header>
  )
}

export default Header