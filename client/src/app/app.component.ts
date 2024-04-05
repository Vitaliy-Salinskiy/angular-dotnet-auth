import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AuthButtonComponent } from './components/auth-btn/auth-btn.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthButtonComponent, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public isBrowser = isPlatformBrowser(this.platformId);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
}
