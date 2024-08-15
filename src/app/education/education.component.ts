import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {data} from "../data";
import {SchoolCardComponent} from "./school-card/school-card.component";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, SchoolCardComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

    protected readonly data = data;
}
