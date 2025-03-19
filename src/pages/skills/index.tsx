import { ISkill } from "@/interfaces/data.interfaces";
import fs from "fs";

function fetchData() {
  const readData = fs.readFileSync("./src/db/db.json", "utf-8");
  const readDataJSON = JSON.parse(readData);
  return readDataJSON.skills;
}

const skills: ISkill[] = fetchData();

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
