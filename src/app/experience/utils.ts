export function calcDatesDiff(startDate: Date, endDate: Date): string {
  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth() + 1;

  const yearsString = years > 0 ? `${years} yrs.` : "";
  const monthsString = months > 0 ? `${months} mos.` : "";

  if (years > 0 && months === 0) {
    return yearsString;
  }
  if (years === 0 && months > 0) {
    return monthsString;
  }

  return `${yearsString}, ${monthsString}`;
}
