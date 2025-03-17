export default function About() {
    return (
        <div id="about" className="bg-mycolor4 p-4 h-[50vh] md:flex md:justify-center">
            <div className="h-full w-[90vw] flex flex-col md:flex-row items-center">
                <h1 className="text-mycolor2 text-2xl md:text-4xl md:font-semibold md:text-center md:w-[30vw]">
                About Me!
                </h1>
                <div className="md:w-[60vw] text-center text-mycolor2 mt-4 md:grid md:grid-cols-4 md:gap-2">
                    <div className="flex flex-col justify-center items-center border-2 border-mycolor1 w-[175px] h-[175px] rounded-lg">
                        <p className="text-mycolor1 md:text-2xl font-semibold">5 Years</p>
                        <p className="text-mycolor1 md:text-lg">Of Experience</p>
                    </div>
                    <div className="flex flex-col justify-center items-center border-2 border-mycolor1 w-[175px] h-[175px] rounded-lg">
                        <p className="text-mycolor1 md:text-2xl font-semibold">100+</p>
                        <p className="text-mycolor1 md:text-lg">Satisfied Clients</p>
                    </div>
                    <div className="flex flex-col justify-center items-center border-2 border-mycolor1 w-[175px] h-[175px] rounded-lg">
                        <p className="text-mycolor1 md:text-2xl font-semibold">1000+</p>
                        <p className="text-mycolor1 md:text-lg">Professional Projects</p>
                    </div>
                    <div className="flex flex-col justify-center items-center border-2 border-mycolor1 w-[175px] h-[175px] rounded-lg">
                        <p className="text-mycolor1 md:text-2xl font-semibold">1000+</p>
                        <p className="text-mycolor1 md:text-lg">WebApp Builded</p>
                    </div>
                </div>
            </div>
        </div>
    )
}