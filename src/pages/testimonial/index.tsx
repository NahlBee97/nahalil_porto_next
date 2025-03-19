"use client";

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
    img: "/armin.jpeg",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum.",
  },
  {
    name: "Sasuke Uchiha",
    img: "/sasuke.jpg",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum.",
  },
  {
    name: "Robert Kiyosaki",
    img: "/robert.png",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum.",
  },
  {
    name: "Eichiro Oda",
    img: "/oda.jpeg",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, voluptatum.",
  },
  {
    name: "Monkey D. Luffy",
    img: "/luffy.jpeg",
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
  };

  return (
    <div id="testimonial" className="bg-mycolor4 py-8">
      <h2 className="text-3xl text-center font-bold text-mycolor2 mb-8">
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
                    className="h-44 w-44 border border-mycolor2 rounded-full"
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
