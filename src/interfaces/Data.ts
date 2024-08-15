import {ProjectsData} from "./ProjectsData";
import {About} from "./About";
import {Header} from "./Header";
import {Education} from "./Education";
import {HobbySection} from "./HobbySection";
import {ExperienceSection} from "./ExperienceSection";

export interface Data {
  fr: {
    headerSection: Header;
    about: About;
    projectSection: ProjectsData;
    educationSection: Education;
    hobbySection: HobbySection;
    experienceSection: ExperienceSection;
  };
}
