import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() name!: string;
  @Input() technologies!: any;
  @Input() description!: string;
  @Input() image?: any;
  @Input() code?: any;
  @Input() live?: any;
}
