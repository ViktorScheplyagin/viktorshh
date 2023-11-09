import { TerminalOutputAnimation } from "@/components";
import { ISkill } from "@/app/api/skills/interfaces";
import { Skill } from "./_components";

const Skills = async () => {
  const response: Response = await fetch("http://localhost:3000/api/skills", {
    cache: "no-cache",
  });
  const skills: ISkill[] = await response.json();

  return (
    <TerminalOutputAnimation>
      <div className="grid grid-cols-2 gap-12">
        {skills.map((skill, index) => (
          <Skill key={index} title={skill.name} items={skill.technologies} />
        ))}
      </div>
    </TerminalOutputAnimation>
  );
};

export default Skills;
