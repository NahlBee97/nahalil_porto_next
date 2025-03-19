export default function About() {
    return (
      <div
        id="about"
        className="bg-mycolor4 p-4 md:h-[50vh] md:flex md:justify-center"
      >
        <div className="h-full flex flex-col items-center md:flex-row md:w-[90vw]">
          <h1 className="text-mycolor2 text-2xl font-semibold  md:text-4xl md:text-center md:w-[30vw]">
            About Me!
          </h1>
          <div className="grid grid-cols-2 gap-3 text-center text-mycolor2 mt-4 md:w-[60vw] md:grid-cols-4 md:gap-2">
            <div className="w-[125px] h-[125px] flex flex-col justify-center items-center border-2 border-mycolor1 rounded-lg md:w-[175px] md:h-[175px] ">
              <p className="text-mycolor1 text-lg font-semibold md:text-2xl">
                5 Years
              </p>
              <p className="text-mycolor1 text-sm md:text-lg">Of Experience</p>
            </div>
            <div className="w-[125px] h-[125px] flex flex-col justify-center items-center border-2 border-mycolor1 md:w-[175px] md:h-[175px] rounded-lg">
              <p className="text-mycolor1 md:text-2xl font-semibold">100+</p>
              <p className="text-mycolor1 md:text-lg">Satisfied Clients</p>
            </div>
            <div className="w-[125px] h-[125px] flex flex-col justify-center items-center border-2 border-mycolor1 md:w-[175px] md:h-[175px] rounded-lg">
              <p className="text-mycolor1 md:text-2xl font-semibold">1000+</p>
              <p className="text-mycolor1 md:text-lg">Professional Projects</p>
            </div>
            <div className="w-[125px] h-[125px] flex flex-col justify-center items-center border-2 border-mycolor1 md:w-[175px] md:h-[175px] rounded-lg">
              <p className="text-mycolor1 md:text-2xl font-semibold">1000+</p>
              <p className="text-mycolor1 md:text-lg">WebApp Builded</p>
            </div>
          </div>
        </div>
      </div>
    );
}