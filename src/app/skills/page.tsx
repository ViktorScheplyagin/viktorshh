import { TerminalOutputAnimation } from "@/components";
import { ISkill } from "@/app/interfaces";
import { Skill } from "./_components";
import { API_ROUTES } from "../../constants/api";

const Skills = async () => {
  const response: Response = await fetch(API_ROUTES.SKILLS);
  const skills: ISkill[] = await response.json();

  return (
    <TerminalOutputAnimation>
      <div className="grid grid-cols-1 gap-y-10">
        {skills.map((skill, index) => (
          <Skill key={index} title={skill.name} items={skill.technologies} />
        ))}
      </div>
    </TerminalOutputAnimation>
  );
};

export default Skills;
