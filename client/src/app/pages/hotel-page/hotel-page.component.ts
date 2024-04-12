import { Component } from '@angular/core';

import { HeroComponent } from '../../components/hero/hero.component';
import { DatePickerComponent } from '../../components/date-picker/date-picker.component';

@Component({
  selector: 'app-hotel-page',
  standalone: true,
  imports: [HeroComponent, DatePickerComponent],
  templateUrl: './hotel-page.component.html',
})
export class HotelPageComponent {}
