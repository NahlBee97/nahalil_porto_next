"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PageProps, IProjectDetail } from "@/interfaces/data.interfaces";

const projects: IProjectDetail[] = [
  {
    id: 1,
    name: "Ocean Of Games",
    image: "/projects/OceanOfGames.png",
    situation:
      "A comprehensive gaming platform offering a wide range of downloadable games with a user-friendly interface.",
    task: "Develop a user-friendly interface and ensure seamless download functionality for users.",
    action:
      "Implemented a responsive web design and optimized server infrastructure to handle high traffic and large file downloads.",
    result:
      "Successfully launched the platform with over 1,000 games available, achieving a 20% increase in user engagement within the first month.",
  },
  {
    id: 2,
    name: "Organizo",
    image: "/projects/Organizo.png",
    situation:
      "A productivity application with real-time updates, team collaboration features, and customizable workflow management.",
    task: "Develop a task management system with real-time collaboration features.",
    action:
      "Built a real-time collaboration feature using WebSockets and implemented a customizable workflow management system.",
    result:
      "Increased team productivity by 30% and improved task tracking efficiency.",
  },
  {
    id: 3,
    name: "Medoctor",
    image: "/projects/medoctor.png",
    situation:
      "A secure patient management system with appointment scheduling, medical records integration, and HIPAA-compliant data handling.",
    task: "Develop a secure portal for managing patient appointments and medical records.",
    action:
      "Integrated secure authentication and data encryption to ensure HIPAA compliance.",
    result:
      "Improved patient data security and streamlined appointment scheduling.",
  },
  {
    id: 4,
    name: "Boldtri",
    image: "/projects/boldtri.png",
    situation:
      "An interactive analytics platform with real-time data visualization, predictive modeling, and comprehensive reporting tools.",
    task: "Create a financial dashboard with real-time data visualization.",
    action:
      "Implemented real-time data feeds and interactive charts for financial analysis.",
    result:
      "Enhanced financial decision-making with up-to-date insights and reports.",
  },
  {
    id: 5,
    name: "Mangaku",
    image: "/projects/mangaku.png",
    situation:
      "A dynamic manga reading platform with a vast library and personalized recommendations.",
    task: "Develop a scalable API for manga content delivery and user interactions.",
    action:
      "Built a RESTful API with scalable architecture and integrated personalized recommendation algorithms.",
    result:
      "Enhanced user engagement with personalized content and supported millions of daily interactions.",
  },
];


export default function Detail({ params }: PageProps) {
  const [project, setProject] = useState<IProjectDetail | undefined>(undefined);
  const [resolvedParams, setResolvedParams] = useState<{ slug: string } | null>(
    null
  );

  useEffect(() => {
    const resolveParams = async () => {
      const resolved = await params;
      // Decode the slug parameter
      const decodedSlug = decodeURIComponent(resolved.slug);
      setResolvedParams({ slug: decodedSlug });
    };

    resolveParams();
  }, [params]);

  useEffect(() => {
    if (resolvedParams) {
      const fetchProject = () => {
        try {
          const project = projects.find(
            (project) => project.name === resolvedParams.slug
          );
          setProject(project);
        } catch (Err) {
          console.log(Err);
        }
      };

      fetchProject();
    }
  }, [resolvedParams]);

  const getNextProjectSlug = () => {
    if (project) {
      const currentIndex = projects.findIndex((p) => p.name === project.name);
      const nextIndex = (currentIndex + 1) % projects.length;
      return projects[nextIndex].name;
    }
    return "";
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-mycolor4 shadow-md rounded-lg">
      <div className="flex flex-col justify-center h-[30vh] border-b-2 border-b-mycolor1">
        <h1 className="text-2xl text-mycolor2 font-semibold md:text-3xl">
          Project Details
        </h1>
        <div className="flex text-mycolor2 mt-4 gap-3 ">
          <Link
            href="/"
            className="text-sm font-semibold text-center border-2 border-mycolor1 rounded-lg w-32 py-1 px-2 hover:bg-mycolor1 hover:text-mycolor4"
          >
            Back To Home
          </Link>
          <Link
            href="/#portfolio"
            className="text-sm font-semibold text-center border-2 border-mycolor1 rounded-lg w-32 py-1 px-2 hover:bg-mycolor1 hover:text-mycolor4"
          >
            Portfolio
          </Link>
          <Link
            href={`/portfolio/${getNextProjectSlug()}`}
            className="text-sm font-semibold text-center border-2 border-mycolor1 rounded-lg w-32 py-1 px-2 hover:bg-mycolor1 hover:text-mycolor4"
          >
            Next Project →
          </Link>
        </div>
      </div>
      {project ? (
        <div className="text-justify">
          <h1 className="text-2xl uppercase font-bold my-8 text-mycolor1 md:text-3xl">
            {project.name}
          </h1>
          <div className="flex justify-center items-center mb-4">
            <img className="w-[550px]" src={project.image} alt={project.name} />
          </div>
          <div className="mb-6">
            <h2 className="text-lg text-mycolor1 font-semibold mb-2 md:text-xl">
              Situation
            </h2>
            <p className="text-sm text-mycolor2 mb-4 md:text-base">{project.situation}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-lg text-mycolor1 font-semibold mb-2 md:text-xl">Task</h2>
            <p className="text-sm text-mycolor2 mb-4 md:text-base">{project.task}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-lg text-mycolor1 after:content-['_✓'] font-semibold mb-2 md:text-xl">
              Action
            </h2>
            <p className="text-sm text-mycolor2 mb-4 md:text-base">{project.action}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-lg text-mycolor1 after:content-['_✓'] font-semibold mb-2 md:text-xl">
              Result
            </h2>
            <p className="text-sm text-mycolor2 md:text-base">{project.result}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-mycolor4 h-[100vh]">Loading...</p>
      )}
    </div>
  );
}
