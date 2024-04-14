import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonComponent } from '../button/button.component';
import { TravelCardComponent } from '../travel-card/travel-card.component';

import { travelData } from '../../../constants';
import { ITravelCard } from '../../../interfaces';

@Component({
  selector: 'travel',
  standalone: true,
  imports: [ButtonComponent, RouterLink, TravelCardComponent],
  templateUrl: './travel.component.html',
})
export class TravelComponent {
  travelData: ITravelCard[] = travelData;
}
