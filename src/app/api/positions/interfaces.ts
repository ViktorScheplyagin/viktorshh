export interface IPosition {
  title: string;
  company: string;
  location: string;
  employmentPeriod: {
    from: string;
    to: string;
  };
  responsibilities: string[];
  achievements?: string[];
}
