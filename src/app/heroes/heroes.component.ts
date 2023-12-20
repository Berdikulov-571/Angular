import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  hero = "This is a hero";
}
