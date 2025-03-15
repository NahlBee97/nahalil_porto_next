interface ISkill {
  name: string;
  level: string;
}

const skills: ISkill[] = [
  { name: "JavaScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "CSS", level: "Advanced" },
  { name: "HTML", level: "Advanced" },
  // Add more skills as needed
];

export default function Skills() {
  return (
    <div id="skills" className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-mycolor2 mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map(({ name, level }) => (
            <div key={name} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-mycolor1">{name}</h3>
              <p className="text-mycolor2">{level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
