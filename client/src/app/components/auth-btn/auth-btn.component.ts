import { DOCUMENT, CommonModule, NgOptimizedImage } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

import {
  ionPersonSharp,
  ionCard,
  ionSettings,
  ionHelpBuoy,
  ionLogOut,
  ionArrowForwardSharp,
} from '@ng-icons/ionicons';

import { accountLinks } from '../../../constants';

@Component({
  selector: 'auth-btn',
  standalone: true,
  imports: [CommonModule, NgIconComponent, NgOptimizedImage],
  templateUrl: './auth-btn.component.html',
  viewProviders: [
    provideIcons({
      ionPersonSharp,
      ionCard,
      ionSettings,
      ionHelpBuoy,
      ionLogOut,
      ionArrowForwardSharp,
    }),
  ],
})
export class AuthButtonComponent {
  public auth = inject(AuthService);
  public document = inject(DOCUMENT);

  isOpen = false;

  accountLinks = accountLinks;

  handleOpenChange = () => {
    this.isOpen = !this.isOpen;
  };

  onLinkClick = (isLogout: boolean | undefined) => {
    if (isLogout) {
      this.auth.logout({
        logoutParams: { returnTo: document.location.origin },
      });
    }
  };
}
