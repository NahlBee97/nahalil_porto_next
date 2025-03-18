"use client"

import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";

interface IProjects {
    name: string;
    img: string;
    desc: string;
}

const projects: IProjects[] = [
    {
        name: "project1",
        img: "/next_icon.png",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum."
    },
    {
        name: "project2",
        img: "/html_icon.png",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum."
    },
    {
        name: "project3",
        img: "/css_icon.png",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum."
    },
    {
        name: "project4",
        img: "/express_icon.png",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum."
    },
    {
        name: "project5",
        img: "/node_icon.png",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum."
    }
]
export default function Portofolio() {
    const router = useRouter();

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };


    return (
      <div id="portfolio" className="bg-mycolor4 py-8">
        <h2 className="text-3xl text-center font-bold text-mycolor2 mb-8">My Works</h2>
        <div className="w-3/4 m-auto">
          <div className="mt-5">
            <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.name} className="border-2 border-mycolor1 h-[450px] rounded-xl">
                <div className="h-56 rounded-t-xl flex justify-center items-center">
                  <img src={project.img} alt="" className="h-44 w-44 rounded-full" />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl text-mycolor1 font-semibold">{project.name}</p>
                  <p className="text-base text-mycolor2 text-justify">{project.desc}</p>
                  <Link href={`/portfolio/${project.name}`} className="bg-mycolor1 text-mycolor4 text-base font-semibold px-4 py-1 rounded-lg mt-2">Read More</Link>
                </div>
              </div>
            ))}
            </Slider>
          </div>
        </div>
      </div>
    )
}