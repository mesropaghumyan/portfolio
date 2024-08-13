import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {data} from "../data";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  protected readonly data = data;
}
