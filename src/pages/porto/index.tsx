"use client";

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
    name: "Ocean Of Games",
    img: "/OceanOfGames.png",
    desc: "A comprehensive gaming platform offering a wide range of downloadable games with a user-friendly interface.",
  },
  {
    name: "Organizo",
    img: "/Organizo.png",
    desc: "A productivity application with real-time updates, team collaboration features, and customizable workflow management.",
  },
  {
    name: "Medoctor",
    img: "/medoctor.png",
    desc: "A secure patient management system with appointment scheduling, medical records integration, and HIPAA-compliant data handling.",
  },
  {
    name: "Boldtri",
    img: "/boldtri.png",
    desc: "An interactive analytics platform with real-time data visualization, predictive modeling, and comprehensive reporting tools.",
  },
  {
    name: "Mangaku",
    img: "/mangaku.png",
    desc: "A dynamic manga reading platform with a vast library and personalized recommendations.",
  },
];
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
    <div id="portfolio" className="bg-mycolor4 py-8">
      <h2 className="text-2xl text-center font-semibold text-mycolor2 mb-4 md:mb-8 md:text-3xl">
        My Works
      </h2>
      <div className="w-3/4 m-auto">
        <div className="mt-5">
          <Slider {...settings}>
            {projects.map((project) => (
              <div
                key={project.name}
                className="border-2 border-mycolor1 h-[450px] rounded-xl"
              >
                <div className="h-56 flex justify-center items-center">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="h-full w-full rounded-t-xl"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl text-mycolor1 font-semibold">
                    {project.name}
                  </p>
                  <p className="h-20 text-sm text-mycolor2 text-center">
                    {project.desc}
                  </p>
                  <Link
                    href={`/portfolio/${project.name}`}
                    className="bg-mycolor1 text-mycolor4 text-base font-semibold px-4 py-1 rounded-lg mt-2"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
