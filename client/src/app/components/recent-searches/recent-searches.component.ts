import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

import { recentSearches } from '../../../constants';

@Component({
  selector: 'recent-searches',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './recent-searches.component.html',
})
export class RecentSearchesComponent {
  recentSearches = recentSearches;
}
