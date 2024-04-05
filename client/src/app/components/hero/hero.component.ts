import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  bookingForm = new FormGroup({
    destination: new FormControl(''),
    checkIn: new FormControl(''),
    checkOut: new FormControl(''),
    roomsAndGuests: new FormControl(''),
  });

  public isBrowser = isPlatformBrowser(this.platformId);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
}
