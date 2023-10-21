import { TerminalOutputAnimation } from "@/components";
import { SkillsCategory } from "./_components";
import { data } from "./data";

export default function Skills() {
  return (
    <TerminalOutputAnimation>
      <div className="grid grid-cols-2 gap-12">
        <SkillsCategory title="Front-End Development" items={data.frontEnd} />
        <SkillsCategory title="Back-End Development" items={data.backEnd} />
        <SkillsCategory title="Testing and Quality Assurance" items={data.QA} />
        <SkillsCategory title="Testing and Quality Assurance" items={data.QA} />
        <SkillsCategory title="Version Control" items={data.versionControl} />
        <SkillsCategory title="Development Tools" items={data.devTools} />
        <SkillsCategory
          title="Agile Methodologies"
          items={data.agileMethodologies}
        />
        <SkillsCategory title="Other" items={data.other} />
      </div>
    </TerminalOutputAnimation>
  );
}
