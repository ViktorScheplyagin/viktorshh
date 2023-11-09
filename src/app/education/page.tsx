import { TerminalOutputAnimation } from "@/components";
import { IEducationData } from "@/app/api/education/interfaces";

const Education = async () => {
  const response = await fetch("http://localhost:3000/api/education", {
    cache: "no-cache",
  });
  const educationData: IEducationData = await response.json();

  // TODO: use grid
  return (
    <TerminalOutputAnimation duration={0.5}>
      <div className="text-xl">Degree: {educationData.degree}</div>
      <div>Branch: {educationData.branch}</div>
      <div className="text-lg leading-relaxed">
        University: {educationData.university}
      </div>
      <div className="text-lg leading-relaxed">
        Location: {educationData.location}
      </div>
      <div className="text-lg leading-relaxed">
        Education years: {educationData.enrollmentYear} -{" "}
        {educationData.graduationYear}
      </div>
    </TerminalOutputAnimation>
  );
};

export default Education;
