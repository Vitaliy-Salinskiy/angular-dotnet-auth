import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ionBed, ionHeart, ionAirplane } from '@ng-icons/ionicons';

import { AuthButtonComponent } from '../auth-btn/auth-btn.component';
import { headerLinks } from '../../../constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent, AuthButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  viewProviders: [provideIcons({ ionBed, ionHeart, ionAirplane })],
})
export class HeaderComponent {
  public isBrowser = isPlatformBrowser(this.platformId);
  links = headerLinks;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
}
