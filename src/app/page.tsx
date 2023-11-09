import { TerminalOutputAnimation } from "@/components";
import { IBiography } from "./api/bio/interfaces";

const Home = async () => {
  const result: Response = await fetch("http://localhost:3000/api/bio", {
    cache: "no-cache",
  });
  const data: IBiography = await result.json();

  return (
    <>
      <TerminalOutputAnimation duration={0.5}>
        {data.content}
      </TerminalOutputAnimation>
    </>
  );
};

export default Home;
