"use client";

import { useEffect, useState } from "react";

interface IProjectDetail {
  name: string;
  situation: string;
  task: string;
  action: string;
  result: string;
}

const projects: IProjectDetail[] = [
  {
    name: "project1",
    situation:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iste tempora molestiae excepturi officia nisi! Unde sint earum mollitia quasi!",
    task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eligendi, consectetur placeat corrupti nobis minima iure cupiditate totam aperiam quia accusantium sed pariatur dolores beatae?",
    action:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, error. Ipsum voluptatibus sequi soluta consectetur impedit vel provident aliquam fugit dolorum suscipit non optio dicta cumque, odio alias maiores et ducimus corrupti totam nesciunt nisi!",
    result:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repudiandae assumenda consectetur error obcaecati iure soluta, corporis in nihil optio qui, rem veniam. Accusantium deleniti dolor quos quas quibusdam repellat exercitationem fugiat dolorum, numquam hic animi quasi blanditiis velit veritatis distinctio incidunt vero sint quae.",
  },
];

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function Detail({ params }: PageProps) {
  const [project, setProject] = useState<IProjectDetail | undefined>(undefined);
  const [resolvedParams, setResolvedParams] = useState<{ slug: string } | null>(
    null
  );

  useEffect(() => {
    const resolveParams = async () => {
      const resolved = await params;
      setResolvedParams(resolved);
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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {project ? (
        <div>
          <h1 className="text-3xl font-bold mb-4 text-indigo-600">
            {project.name}
          </h1>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Situation</h2>
            <p className="text-gray-700 mb-4">{project.situation}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Task</h2>
            <p className="text-gray-700 mb-4">{project.task}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Action</h2>
            <p className="text-gray-700 mb-4">{project.action}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Result</h2>
            <p className="text-gray-700">{project.result}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
  );
}
