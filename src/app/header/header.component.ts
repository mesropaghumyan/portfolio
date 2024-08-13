import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {data} from "../data";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  protected readonly data = data;
}
