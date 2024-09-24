import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { DatePickerComponent } from '../date-picker/date-picker.component';
import { InputComponent } from '../input/input.component';
import { SelectComponent } from '../select/select.component';

import { roomsAndGuestsData } from '../../../constants';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DatePickerComponent,
    InputComponent,
    SelectComponent,
    ButtonComponent,
  ],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  roomAndGuestsData = roomsAndGuestsData;

  public isBrowser = isPlatformBrowser(this.platformId);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  bookingForm: FormGroup = new FormGroup({
    destination: new FormControl<string>(''),
    checkIn: new FormControl<Date | null>(null),
    checkOut: new FormControl<Date | null>(null),
    roomsAndGuests: new FormControl<(typeof roomsAndGuestsData)[0]>(
      roomsAndGuestsData[0]
    ),
  });

  onSelectedDateChange(
    newDate: Date | null,
    destination: 'checkIn' | 'checkOut'
  ) {
    if (destination === 'checkIn') {
      -this.bookingForm.patchValue({ checkIn: newDate });
    } else {
      this.bookingForm.patchValue({ checkOut: newDate });
    }
  }

  onSelectDataChange(selectedData: (typeof roomsAndGuestsData)[0]) {
    this.bookingForm.patchValue({ roomsAndGuests: selectedData });
  }

  handleSubmit() {
    console.log(this.bookingForm.value);
  }
}
