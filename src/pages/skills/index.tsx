interface ISkill {
  id: number;
  image_url: string;
  name: string
}

const skills: ISkill[] = [
  { id:1, image_url:"/react_icon.png", name: "React"},
  { id:2, image_url:"/next_icon.png", name: "Next.js"},
  { id:3, image_url:"/tailwind_css_icon.png", name: "Tailwind CSS"},
  { id:4, image_url:"/typescript_icon.png", name: "TypeScript"},
  { id:5, image_url:"/node_icon.png", name: "Node.js"},
  { id:6, image_url:"express_icon.png", name: "Express.js"},
  { id:7, image_url:"html_icon.png", name: "HTML"},
  { id:8, image_url:"css_icon.png", name: "CSS"},
];

export default function Skills() {
  return (
    <div id="skills" className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl text-center font-bold text-mycolor1 mb-8">My Skills</h2>
        <div className="grid grid-cols-3 gap-6">
          {skills.map(({ id, image_url, name }) => (
            <div key={id} className="w-32 h-32 flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
              <img className="w-20 h-20" src={image_url} alt={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
