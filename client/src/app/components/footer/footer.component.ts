import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import {
  ionLogoFacebook,
  ionLogoTwitter,
  ionLogoYoutube,
  ionLogoInstagram,
} from '@ng-icons/ionicons';

import { ButtonComponent } from '../button/button.component';
import { footerData, socialLinks } from '../../../constants';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage, ButtonComponent, NgIconComponent, InputComponent],
  templateUrl: './footer.component.html',
  viewProviders: [
    provideIcons({
      ionLogoFacebook,
      ionLogoTwitter,
      ionLogoYoutube,
      ionLogoInstagram,
    }),
  ],
})
export class FooterComponent {
  socialLinks = socialLinks;
  footerData = footerData;
}
