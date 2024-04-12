import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { DatePickerComponent } from '../date-picker/date-picker.component';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, DatePickerComponent],
  providers: [],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  bookingForm = new FormGroup({
    destination: new FormControl(''),
    checkIn: new FormControl<Date | null>(null),
    checkOut: new FormControl<Date | null>(null),
    roomsAndGuests: new FormControl(''),
  });

  onSelectedDateChange(newDate: Date | null, destination: string) {
    if (destination === 'checkIn') {
      this.bookingForm.patchValue({ checkIn: newDate });
    } else {
      this.bookingForm.patchValue({ checkOut: newDate });
    }
  }

  public isBrowser = isPlatformBrowser(this.platformId);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
}
