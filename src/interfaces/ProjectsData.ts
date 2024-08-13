import { Category } from "./Category";
import { Project } from "./Project";

export interface ProjectsData {
  title: string;
  categories: Category[];
  [key: string]: Project[] | string | Category[];
}
