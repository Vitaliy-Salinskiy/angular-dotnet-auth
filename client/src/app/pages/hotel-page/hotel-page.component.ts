import { Component } from '@angular/core';

import { HeroComponent } from '../../components/hero/hero.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RecentSearchesComponent } from '../../components/recent-searches/recent-searches.component';
import { TravelComponent } from '../../components/travel/travel.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'hotel-page',
  standalone: true,
  imports: [
    HeroComponent,
    FooterComponent,
    RecentSearchesComponent,
    TravelComponent,
    GalleryComponent,
  ],
  templateUrl: './hotel-page.component.html',
})
export class HotelPageComponent {}
