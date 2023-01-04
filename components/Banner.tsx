function Banner() {
    return (
      <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
          <h1 className="text-7xl">Current Blog</h1>
          <h2 className="mt-7 md:mt-3">
            Welcome to{" "}
            <span className="underline decoration-4 decoration-[#3e4444] ">
              the Peoples
            </span>{" "}
            Favorite Blogs of the Year
          </h2>
        </div>
  
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
          New blogs will be intorduced and sent throughout the whole entire year so stay posted for new and exiting info coming at you EVERYDAY
        </p>
      </div>
    );
  }
  
  export default Banner;