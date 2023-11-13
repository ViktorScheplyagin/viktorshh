import { TerminalOutputAnimation } from "@/components";
import { IPosition } from "@/app/interfaces";
import { Position } from "./_components";
import { API_ROUTES } from "../../constants/api";

const Experience = async () => {
  const response: Response = await fetch(API_ROUTES.POSITIONS);
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
