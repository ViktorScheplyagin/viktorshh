import { NAVIGATION } from "@/constants";
import Link from "./Link";

const Navigation = () => {
  const activeClassName = "after:content-['<-'] after:ml-3";
  const className = "flex justify-between";

  return (
    <nav className="text-lg py-16 w-full max-w-[10rem]">
      <ul className="flex flex-col gap-y-6">
        <li>
          <Link
            className={className}
            activeClassName={activeClassName}
            href={NAVIGATION.ROOT}
          >
            Bio
          </Link>
        </li>
        <li>
          <Link
            className={className}
            activeClassName={activeClassName}
            href={NAVIGATION.EXPERIENCE}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            className={className}
            activeClassName={activeClassName}
            href={NAVIGATION.SKILLS}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className={className}
            activeClassName={activeClassName}
            href={NAVIGATION.EDUCATION}
          >
            Education
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
