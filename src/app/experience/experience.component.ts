import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {data} from "../data";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

    protected readonly data = data;
}
