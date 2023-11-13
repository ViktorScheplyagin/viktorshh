export interface IBiography {
  title: string;
  content: string;
}

export interface IEducationData {
  university: string;
  degree: string;
  branch: string;
  location: string;
  enrollmentYear: number;
  graduationYear: number;
}

export interface IPosition {
  title: string;
  company: string;
  location: string;
  employmentPeriod: {
    from: string;
    to: string;
  };
  responsibilities: string[];
  achievements: string[];
}

export interface ISkill {
  name: string;
  technologies: string[];
}
