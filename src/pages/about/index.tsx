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
                    Hey there! 👋 I'm Nahalil, a passionate front-end developer dedicated to crafting immersive and visually stunning web experiences. With a blend of creativity and technical prowess, I thrive on transforming ideas into pixel-perfect reality.
                    </p>
                    <h2 className="text-mycolor3 mt-2">
                    A Bit of Background
                    </h2>
                    <p className="text-sm">
                    With 2 years in the industry, I've had the opportunity to work on diverse projects ranging from sleek portfolio sites to robust e-commerce platforms. Each project has been a chance to learn, grow, and refine my skills.
                    </p>
                    <h2 className="text-mycolor3 mt-2">
                    Let's Collaborate!
                    </h2>
                    <p className="text-sm">
                    Whether you're a fellow developer, a designer, or a business owner looking to enhance your online presence, I'm always up for exciting projects and collaborations. Let's turn your vision into a digital masterpiece!
                    </p>
                </div>
            </div>
        </div>
    )
}