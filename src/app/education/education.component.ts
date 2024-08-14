import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {data} from "../data";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

    protected readonly data = data;
}
