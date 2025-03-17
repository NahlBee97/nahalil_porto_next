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
    <div id="experience" className="bg-mycolor4">
      <div className="md:w-[80vw] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl text-center font-bold text-mycolor2 mb-2">My Experiences</h2>
        <div className="space-y-6 md:flex md:justify-center">
          <div className="w-[50px] flex flex-col justify-center items-center">
            <p className="text-mycolor1 md:text-xl font-bold rotate-90">______________________________</p>
          </div>
          <div>
            {experiences.map(({ company, role, duration, description }) => (
              <div key={company} className="p-6 mb-4">
                <h3 className="text-2xl font-semibold text-mycolor1">{role} at {company}</h3>
                <p className="text-mycolor2 font-semibold">{duration}</p>
                <p className="mt-2 text-mycolor2">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}