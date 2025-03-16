import Link from "next/link"

export default function HomePage() {
    return (
        <div className="bg-[url(/home_bg.jpg)] h-[100vh] pt-16" id="home">
            <div className="flex flex-col items-center p-4">
                <div>
                    <img className="w-[200px] rounded-full" src="/my_image1.jpeg" alt="my-image1" />
                </div>
                <div className="text-center text-mycolor2 mt-5">
                    <h3 className="text-mycolor1 text-lg">Hello There, Welcome!</h3>
                    <h1 className="mt-4 text-3xl">i'm <span className="text-mycolor1">Nahalil Muchtar</span></h1>
                    <h2 className="text-xl">Software Engineer</h2>
                    <p className="mt-4 text-sm">
                    As a dedicated Software Engineer, I thrive on solving complex problems and building efficient, scalable solutions. My expertise spans across various technologies and platforms, allowing me to deliver robust software applications that enhance user experiences and drive business success.
                    </p>
                    <button className="mt-2 bg-mycolor1 border border-mycolor2 p-2 rounded-md hover:bg-mycolor4 hover:text-mycolor1">
                        <Link href="#portfolio">
                            See My Portofolio
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
};