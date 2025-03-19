import { ISkill } from "@/interfaces/data.interfaces";

const skills: ISkill[] = [
  { id: 1, image_url: "/skills/react_icon.png", name: "React" },
  { id: 2, image_url: "/skills/next_icon.png", name: "Next.js" },
  { id: 3, image_url: "/skills/tailwind_css_icon.png", name: "Tailwind CSS" },
  { id: 4, image_url: "/skills/typescript_icon.png", name: "TypeScript" },
  { id: 5, image_url: "/skills/node_icon.png", name: "Node.js" },
  { id: 6, image_url: "/skills/express_icon.png", name: "Express.js" },
  { id: 7, image_url: "/skills/html_icon.png", name: "HTML" },
  { id: 8, image_url: "/skills/css_icon.png", name: "CSS" },
];

export default function Skills() {
  return (
    <div id="skills" className="flex justify-center bg-mycolor4 py-8">
      <div className="mx-auto px-4">
        <h2 className="text-2xl text-center font-semibold text-mycolor2 mb-5 md:text-3xl md:mb-10">
          My Skills
        </h2>
        <div className="grid grid-cols-3 gap-6 mb-4">
          {skills.map(({ id, image_url, name }) => (
            <div
              key={id}
              className="w-28 h-28 md:w-44 md:h-44 flex justify-center items-center border border-mycolor1 bg-mycolor4 p-4 rounded-lg shadow-md shadow-mycolor1 hover:bg-mycolor2"
            >
              <img
                className="w-16 h-16 md:w-32 md:h-32"
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
