import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-school-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './school-card.component.html',
  styleUrls: ['./school-card.component.css']
})
export class SchoolCardComponent {
  @Input() link!: string;
  @Input() name!: string;
  @Input() degree!: string;
  @Input() startYear!: string;
  @Input() endYear!: string;
}
