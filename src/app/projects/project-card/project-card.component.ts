import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Technology} from "../../../interfaces/Technology";
import {CodeLink} from "../../../interfaces/CodeLink";
import {LiveLink} from "../../../interfaces/LiveLink";
import {ProjectImage} from "../../../interfaces/ProjectImage";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() name!: string;
  @Input() technologies!: Technology[];
  @Input() description!: string;
  @Input() image?: ProjectImage;
  @Input() code?: CodeLink;
  @Input() live?: LiveLink;
}
