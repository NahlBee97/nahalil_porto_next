"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Autoplay } from "swiper/modules";

interface ITestimonials {
    name: string;
    img: string;
    review: string;
}

const projects: ITestimonials[] = [
    {
        name: "Armin Arlert",
        img: "/next_icon.png",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum."
    },
    {
        name: "Sasuke Uchiha",
        img: "/html_icon.png",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum."
    },
    {
        name: "Robert Kiyosaki",
        img: "/css_icon.png",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum."
    },
{
        name: "Eichiro Oda",
        img: "/express_icon.png",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum."
    },
    {
        name: "Monkey D. Luffy",
        img: "/node_icon.png",
        review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum."
    }
]
export default function Testimonial() {
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
      <div id="testimonial" className="bg-gray-100 min-h-screen py-8">
        <h2 className="text-2xl text-center font-bold text-mycolor1 mb-8">What people say about me</h2>
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
                  <p>{project.review}</p>
                </div>
              </div>
            ))}
            </Slider>
          </div>
        </div>
      </div>
    )
}