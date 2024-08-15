import {Company} from "./Company";

export interface Experience {
  company: Company;
  tag: string;
  jobTitle: string;
  startYear: string;
  endYear: string;
  jobDescription: string;
}
