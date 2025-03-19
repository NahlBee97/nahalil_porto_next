import Link from "next/link"

export default function HomePage() {
    return (
        <div className="bg-[url(/home_bg.png)] bg-center h-[100vh] w-full md:flex md:justify-center md:items-center pt-16" id="home">
            <div className="md:w-[90vw] md:h-[90vh] h-full flex flex-col items-center md:grid md:grid-cols-2 p-4">
                <div className="text-center md:flex md:flex-col md:justify-center md:items-center text-mycolor2 mt-5 md:mt-0 order-4">
                    <h3 className="text-mycolor1 text-lg md:text-2xl font-semibold">Hello There, Welcome!</h3>
                    <h1 className="mb-1 text-3xl font-semibold md:text-4xl ">I'm <span className="text-mycolor1">Nahalil Muchtar</span></h1>
                    <h2 className="text-xl font-semibold">Software Engineer</h2>
                    <p className="mb-2 text-sm md:text-base md:w-[400px] md:mt-5 md:mb-5">
                    As a dedicated Software Engineer, I thrive on solving complex problems and building efficient, scalable solutions. My expertise spans across various technologies and platforms, allowing me to deliver robust software applications that enhance user experiences and drive business success.
                    </p>
                    <button className="mb-4 mt-4 md:mt-2 border-2 text-sm md:text-lg border-mycolor1 font-semibold p-3 rounded-md hover:bg-mycolor1">
                        <Link href="#portfolio">
                            See My Works
                        </Link>
                    </button>
                </div>
                <div className="flex justify-center items-center h-full md:order-4">
                    <img className="w-[175px] md:h-[425px] md:w-[450px] rounded-full md:shadow-[11px_19px_0px_3px_#00EEFF] shadow-[11px_19px_0px_-10px_#00EEFF]" src="/my_image2.png" alt="my-image2" />
                </div>
            </div>
        </div>
    )
};