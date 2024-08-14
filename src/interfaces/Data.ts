import {ProjectsData} from "./ProjectsData";
import {About} from "./About";
import {Header} from "./Header";
import {Education} from "./Education";

export interface Data {
  fr: {
    header: Header;
    about: About;
    projects: ProjectsData;
    education: Education;
  };
}
