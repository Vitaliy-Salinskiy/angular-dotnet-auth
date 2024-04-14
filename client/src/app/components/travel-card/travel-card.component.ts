import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ButtonComponent } from '../button/button.component';

import { ITravelCard } from '../../../interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'travel-card',
  standalone: true,
  imports: [NgOptimizedImage, ButtonComponent, RouterLink],
  templateUrl: './travel-card.component.html',
})
export class TravelCardComponent {
  @Input() travelCard: ITravelCard = {} as ITravelCard;
}
