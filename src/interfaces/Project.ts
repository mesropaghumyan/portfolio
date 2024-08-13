import {Technology} from "./Technology";
import {ProjectImage} from "./ProjectImage";
import {LiveLink} from "./LiveLink";
import {CodeLink} from "./CodeLink";

export interface Project {
  name: string;
  technologies: Technology[];
  description: string;
  image?: ProjectImage;
  code?: CodeLink;
  live?: LiveLink;
}

