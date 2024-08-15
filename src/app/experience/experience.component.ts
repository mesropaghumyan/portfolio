import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {data} from "../data";
import {ExperienceCardComponent} from "./experience-card/experience-card.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ExperienceCardComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

    protected readonly data = data;
}
