"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ITestimonials } from "@/interfaces/data.interfaces";

const projects: ITestimonials[] = [
  {
    id: 1,
    name: "Armin Arlert",
    img: "/testimonials/armin.jpeg",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum.",
  },
  {
    id: 2,
    name: "Sasuke Uchiha",
    img: "/testimonials/sasuke.jpg",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum.",
  },
  {
    id: 3,
    name: "Robert Kiyosaki",
    img: "/testimonials/robert.png",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum.",
  },
  {
    id: 4,
    name: "Eichiro Oda",
    img: "/testimonials/oda.jpeg",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum.",
  },
  {
    id: 5,
    name: "Monkey D. Luffy",
    img: "/testimonials/luffy.jpeg",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum.",
  },
];
export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div id="testimonial" className="bg-mycolor4 py-8">
      <h2 className="text-2xl text-center font-bold text-mycolor2 mb-8 md:text-3xl">
        What People Say About Me!
      </h2>
      <div className="w-3/4 m-auto">
        <div className="mt-5">
          <Slider {...settings}>
            {projects.map((project) => (
              <div
                key={project.name}
                className="border-2 border-mycolor1 h-[450px] rounded-xl"
              >
                <div className="h-56 rounded-t-xl flex justify-center items-center">
                  <img
                    src={project.img}
                    alt=""
                    className="h-44 w-44 border-2 border-mycolor2 rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl text-mycolor1 font-semibold">
                    {project.name}
                  </p>
                  <p className="text-base text-mycolor2">{project.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
