interface ISkill {
  id: number;
  image_url: string;
  name: string;
}

const skills: ISkill[] = [
  { id: 1, image_url: "/react_icon.png", name: "React" },
  { id: 2, image_url: "/next_icon.png", name: "Next.js" },
  { id: 3, image_url: "/tailwind_css_icon.png", name: "Tailwind CSS" },
  { id: 4, image_url: "/typescript_icon.png", name: "TypeScript" },
  { id: 5, image_url: "/node_icon.png", name: "Node.js" },
  { id: 6, image_url: "express_icon.png", name: "Express.js" },
  { id: 7, image_url: "html_icon.png", name: "HTML" },
  { id: 8, image_url: "css_icon.png", name: "CSS" },
];

export default function Skills() {
  return (
    <div id="skills" className="flex justify-center bg-mycolor4 py-8">
      <div className="mx-auto px-4">
        <h2 className="text-3xl text-center font-semibold text-mycolor2 mb-10">
          My Skills
        </h2>
        <div className="grid grid-cols-3 gap-6 mb-4">
          {skills.map(({ id, image_url, name }) => (
            <div
              key={id}
              className="w-32 h-32 md:w-44 md:h-44 flex justify-center items-center border border-mycolor1 bg-mycolor4 p-4 rounded-lg shadow-md shadow-mycolor1 hover:bg-mycolor2"
            >
              <img
                className="w-20 h-20 md:w-32 md:h-32"
                src={image_url}
                alt={name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
