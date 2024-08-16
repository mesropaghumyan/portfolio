import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {AboutComponent} from "./about/about.component";
import {ProjectsComponent} from "./projects/projects.component";
import {EducationComponent} from "./education/education.component";
import {HobbiesComponent} from "./hobbies/hobbies.component";
import {ExperienceComponent} from "./experience/experience.component";
import {TechnologiesComponent} from "./technologies/technologies.component";
import {FooterComponent} from "./footer/footer.component";
import {SkillsComponent} from "./skills/skills.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AboutComponent, ProjectsComponent, EducationComponent, HobbiesComponent, ExperienceComponent, TechnologiesComponent, FooterComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}
