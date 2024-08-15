import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobby-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobby-card.component.html',
  styleUrls: ['./hobby-card.component.css']
})
export class HobbyCardComponent {
  @Input() name!: string;
  @Input() icon!: string;
}
