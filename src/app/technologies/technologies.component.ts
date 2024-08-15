import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {data} from "../data";
import {TechnologyCategory} from "../../enums/TechnologyCategory";
import {TechnologyCardComponent} from "./technology-card/technology-card.component";


@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, TechnologyCardComponent],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  selectedCategory: TechnologyCategory = TechnologyCategory.languages;

  setCategory(categoryName: TechnologyCategory) {
    this.selectedCategory = categoryName;
  }

  getFilteredProjects() {
    const categoryTechnologies = this.data.fr.technologies[this.selectedCategory] as any;

    if (categoryTechnologies) {
      return categoryTechnologies;
    }

    return [];
  }

  protected readonly data = data;
}
