import { ContentBlockList } from "./ContentBlockList";
import { IPosition } from "../IPosition";

const Position = ({ data }: { data: IPosition }) => {
  const {
    title,
    company,
    employmentPeriod,
    location,
    achievements,
    responsibilities,
  } = data;

  return (
    <div className="mb-12">
      <h2 className="text-2xl">
        {`${title} at ${company}; ${location} - ${employmentPeriod}`}
      </h2>
      <ContentBlockList heading="Responsibilities" items={responsibilities} />
      {achievements && (
        <ContentBlockList heading="Achievements" items={achievements} />
      )}
    </div>
  );
};

export default Position;
