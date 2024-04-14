import { Component } from '@angular/core';

import { HeroComponent } from '../../components/hero/hero.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'hotel-page',
  standalone: true,
  imports: [HeroComponent, FooterComponent],
  templateUrl: './hotel-page.component.html',
})
export class HotelPageComponent {}
