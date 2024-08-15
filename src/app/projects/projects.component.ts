import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryName } from '../../enums/CategoryName';
import {data} from "../data";
import {Project} from "../../interfaces/Project";
import {ProjectCardComponent} from "./project-card/project-card.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  selectedCategory: CategoryName = CategoryName.all;

  setCategory(categoryName: CategoryName) {
    this.selectedCategory = categoryName;
  }

  getFilteredProjects() {
    const categoryProjects = this.data.fr.projectSection[this.selectedCategory as string] as Project[];

    if (categoryProjects) {
      return categoryProjects;
    }

    return [];
  }

  protected readonly data = data;
}
