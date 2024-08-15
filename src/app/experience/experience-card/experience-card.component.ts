import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent {
  @Input() companyName!: string;
  @Input() companyLink!: string;
  @Input() startYear!: string;
  @Input() endYear!: string;
  @Input() jobTitle!: string;
  @Input() jobDescription!: string;
}
