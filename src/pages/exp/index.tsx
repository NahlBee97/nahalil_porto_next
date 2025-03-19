import fs from "fs";
import IExp from "@/interfaces/data.interfaces";

function fetchData() {
  const readData = fs.readFileSync("./src/db/db.json", "utf-8");
  const readDataJSON = JSON.parse(readData);
  return readDataJSON.experiences;
}

const experiences: IExp[] = fetchData();

export default function Experience() {
  return (
    <div id="experience" className="bg-mycolor4">
      <div className="md:w-[80vw] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl text-center font-semibold text-mycolor2 md:mb-2 md:text-3xl">
          My Experiences
        </h2>
        <div className="md:mt-6 md:flex md:justify-center">
          <div className="hidden w-[50px] md:flex md:flex-col justify-center items-center">
            <p className="text-mycolor1 mr-6 md:mr-0 md:text-xl font-bold rotate-90">
              ______________________________
            </p>
          </div>
          <div>
            {experiences.map(({ company, role, duration, description }) => (
              <div key={company} className="px-6 py-2 mt-4 md:mb-4 md:p-6">
                <h3 className="before:content-['*_'] md:before:content-['_'] text-lg md:text-2xl font-semibold text-mycolor1">
                  {role} at {company}
                </h3>
                <p className="text-sm text-mycolor2 font-semibold md:text-base">
                  {duration}
                </p>
                <p className="text-sm mt-2 text-mycolor2 md:text-base">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}