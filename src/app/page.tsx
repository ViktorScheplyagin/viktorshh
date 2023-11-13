import { TerminalOutputAnimation } from "@/components";
import { IBiography } from "@/app/interfaces";
import { API_ROUTES } from "../constants/api";

const Home = async () => {
  const result: Response = await fetch(API_ROUTES.BIO);
  const data: IBiography = await result.json();

  return (
    <TerminalOutputAnimation duration={0.5}>
      {data.content}
    </TerminalOutputAnimation>
  );
};

export default Home;
