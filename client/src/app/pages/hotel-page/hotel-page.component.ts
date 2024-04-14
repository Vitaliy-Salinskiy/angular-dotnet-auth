import { Component } from '@angular/core';

import { HeroComponent } from '../../components/hero/hero.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RecentSearchesComponent } from '../../components/recent-searches/recent-searches.component';

@Component({
  selector: 'hotel-page',
  standalone: true,
  imports: [HeroComponent, FooterComponent, RecentSearchesComponent],
  templateUrl: './hotel-page.component.html',
})
export class HotelPageComponent {}
