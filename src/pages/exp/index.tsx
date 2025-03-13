interface IExp {
  company: string;
  role: string;
  duration: string;
  description: string;
}

const experiences: IExp[] = [
  {
    company: "Company A",
    role: "Software Engineer",
    duration: "Jan 2020 - Present",
    description: "Developed and maintained web applications using React and Node.js.",
  },
  {
    company: "Web Solutions Inc.",
    role: "Frontend Developer",
    duration: "Jun 2018 - Dec 2019",
    description: "Built and optimized user interfaces for various web applications.",
  },
  // Add more experiences as needed
];

export default function Experience() {
  return (
    <div id="experience" className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-mycolor2 mb-8">Experience</h2>
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