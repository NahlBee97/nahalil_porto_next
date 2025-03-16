export default function About() {
    return (
        <div id="about" className="bg-mycolor4 p-4 h-[100vh]">
            <div className="flex flex-col items-center">
                <div>
                    <img className="w-[200px] rounded-full" src="/my_image2.png" alt="my-image2" />
                </div>
                <div className="text-center text-mycolor2 mt-4">
                    <h1 className="text-mycolor1 text-2xl">
                    About Me!
                    </h1>
                    <p className="text-sm mt-1">
                    Hey there! 👋 I'm Nahalil, a dedicated Software Engineer with a passion for developing innovative software solutions. I excel in creating efficient, scalable applications that solve real-world problems and enhance user experiences. With a blend of creativity and technical expertise, I thrive on transforming complex ideas into robust and impactful software.
                    </p>
                    <h2 className="text-mycolor3 mt-2">
                    A Bit of My Background
                    </h2>
                    <p className="text-sm">
                    With 5 years in the tech industry, I've had the opportunity to work on diverse projects ranging from dynamic web applications to complex backend systems.
                    </p>
                    <h2 className="text-mycolor3 mt-2">
                    Let's Collaborate!
                    </h2>
                    <p className="text-sm">
                    Whether you're a fellow developer, a designer, or a business owner seeking to innovate with technology, I'm eager to collaborate on exciting projects. Let's work together to transform your vision into a robust and scalable software solution!.
                    </p>
                </div>
            </div>
        </div>
    )
}