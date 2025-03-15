interface IExp {
  company: string;
  role: string;
  duration: string;
  description: string;
}

const experiences: IExp[] = [
  {
    company: "Singapore Tech Inc.",
    role: "Software Engineer",
    duration: "Jan 2030 - Present",
    description: "Developed and maintained web application's UI using React and Node.js.",
  },
  {
    company: "GOTO Corp.",
    role: "Senior Backend Developer",
    duration: "Jan 2027 - Dec 2030",
    description: "Built and optimized user interfaces for various web applications.",
  },
  {
    company: "Web Solutions Inc.",
    role: "Backend Developer",
    duration: "Jun 2025 - Dec 2027",
    description: "Built and optimized backend functionality for various web applications.",
  },
];

export default function Experience() {
  return (
    <div id="experience" className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl text-center font-bold text-mycolor1 mb-8">My Experiences</h2>
        <div className="space-y-6">
          {experiences.map(({ company, role, duration, description }) => (
            <div key={company} className="bg-white shadow-md rounded-lg p-6 mb-4">
              <h3 className="text-xl font-semibold text-mycolor1">{role} at {company}</h3>
              <p className="text-mycolor4">{duration}</p>
              <p className="mt-2 text-mycolor4">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}