import { TerminalOutputAnimation } from "@/components";
import { Position } from "./_components";
import { KikiDevelopment, ITransition, Zone3000 } from "./data";

export default function Experience() {
  return (
    <TerminalOutputAnimation duration={2}>
      <Position data={Zone3000} />
      <Position data={ITransition} />
      <Position data={KikiDevelopment} />
    </TerminalOutputAnimation>
  );
}
