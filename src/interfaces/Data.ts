import {ProjectsData} from "./ProjectsData";
import {About} from "./About";
import {Header} from "./Header";

export interface Data {
  fr: {
    header: Header;
    about: About;
    projects: ProjectsData;
  };
}
