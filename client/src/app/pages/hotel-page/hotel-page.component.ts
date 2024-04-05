import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-hotel-page',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './hotel-page.component.html',
})
export class HotelPageComponent {}
