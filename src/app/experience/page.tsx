import { TerminalOutputAnimation } from "@/components";
import { IPosition } from "@/app/api/positions/interfaces";
import { Position } from "./_components";

const Experience = async () => {
  const response: Response = await fetch(
    "http://localhost:3000/api/positions",
    { cache: "no-cache" }
  );
  const positions: IPosition[] = await response.json();

  return (
    <TerminalOutputAnimation duration={2}>
      {positions.map((position, index) => (
        <Position key={index} data={position} />
      ))}
    </TerminalOutputAnimation>
  );
};

export default Experience;
