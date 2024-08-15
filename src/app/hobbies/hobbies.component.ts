import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {data} from "../data";
import {HobbyCardComponent} from "./hobby-card/hobby-card.component";

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule, HobbyCardComponent],
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent {

    protected readonly data = data;
}
