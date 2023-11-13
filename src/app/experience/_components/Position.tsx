import { IPosition } from "@/app/interfaces";
import { ContentBlockList } from "./ContentBlockList";
import { calcDatesDiff } from "../utils";

const Position = ({ data }: { data: IPosition }) => {
  const {
    title,
    company,
    employmentPeriod,
    location,
    achievements,
    responsibilities,
  } = data;
  const employedFromDate = new Date(employmentPeriod.from);
  const employedToDate = new Date(employmentPeriod.to);

  const yearFrom = employedFromDate.getFullYear();
  const yearTo = employedToDate.getFullYear();
  const period = calcDatesDiff(employedFromDate, employedToDate);

  return (
    <div className="mb-12">
      <h2 className="text-2xl">
        {`${title} at ${company}; ${location} - ${yearFrom}-${yearTo} (${period})`}
      </h2>
      <ContentBlockList heading="Responsibilities" items={responsibilities} />
      {!!achievements.length && (
        <ContentBlockList heading="Achievements" items={achievements} />
      )}
    </div>
  );
};

export default Position;
