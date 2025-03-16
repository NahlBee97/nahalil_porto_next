"use client"

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
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };


    return (
      <div id="portofolio" className="bg-gray-100 min-h-screen py-8">
        <h2 className="text-2xl text-center font-bold text-mycolor1 mb-8">My Portofolio</h2>
        <div className="w-3/4 m-auto">
          <div className="mt-5">
            <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.name} className="bg-white h-[450px] text-black rounded-xl">
                <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                  <img src={project.img} alt="" className="h-44 w-44 rounded-full" />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl font-semibold">{project.name}</p>
                  <p>{project.desc}</p>
                  <button onClick={(): void => {router.push(`/portfolio/${project.name}`)}} className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</button>
                </div>
              </div>
            ))}
            </Slider>
          </div>
        </div>
      </div>
    )
}