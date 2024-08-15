import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCategory } from '../../enums/ProjectCategory';
import {data} from "../data";
import {ProjectCardComponent} from "./project-card/project-card.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  selectedCategory: ProjectCategory = ProjectCategory.all;

  setCategory(categoryName: ProjectCategory) {
    this.selectedCategory = categoryName;
  }

  getFilteredProjects() {
    const categoryProjects = this.data.fr.projects[this.selectedCategory] as any;

    if (categoryProjects) {
      return categoryProjects;
    }

    return [];
  }

  protected readonly data = data;
}
