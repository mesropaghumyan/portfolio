import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {data} from "../data";
import {SkillCategory} from "../../enums/SkillCategory";
import {TechnologyCardComponent} from "../technologies/technology-card/technology-card.component";
import {SkillCardComponent} from "./skill-card/skill-card.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TechnologyCardComponent, SkillCardComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
    selectedCategory: SkillCategory = SkillCategory.realiser;

    setCategory(categoryName: SkillCategory) {
      this.selectedCategory = categoryName;
    }

  getFilteredProjects() {
    const categorySkills = this.data.fr.skills[this.selectedCategory] as any;

    if (categorySkills) {
      return categorySkills;
    }

    return [];
  }

    protected readonly data = data;
}
