interface IProject {
  title: string;
  description: string;
  link: string;
}

const projects: IProject[] = [
  {
    title: "Project One",
    description: "A web application built with React and Node.js.",
    link: "https://project-one.example.com",
  },
  {
    title: "Project Two",
    description: "A mobile app developed using React Native.",
    link: "https://project-two.example.com",
  },
  {
    title: "Project Three",
    description: "A data visualization tool using D3.js.",
    link: "https://project-three.example.com",
  },
  // Add more projects as needed
];

export default function Portfolio() {
  return (
    <div id="portfolio" className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-mycolor2 mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map(({ title, description, link }) => (
            <div key={title} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-mycolor1">{title}</h3>
              <p className="text-mycolor2 mb-4">{description}</p>
              <a href={link} className="text-mycolor2 hover:bg-mycolor2 hover:text-mycolor4 rounded-lg p-2" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};