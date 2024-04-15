import { NgClass } from '@angular/common';
import {
  Component,
  OnInit,
  HostListener,
  Output,
  EventEmitter,
  Input,
  inject,
  OnDestroy,
} from '@angular/core';
import { provideIcons, NgIconComponent } from '@ng-icons/core';
import { EMPTY, Subscription } from 'rxjs';
import { ionCalendar, ionArrowBack, ionArrowForward } from '@ng-icons/ionicons';

import { UiService } from '../../services/ui.service';

import { monthNames, weekDays } from '../../../constants';

@Component({
  selector: 'date-picker',
  standalone: true,
  imports: [NgIconComponent, NgClass],
  templateUrl: './date-picker.component.html',
  viewProviders: [provideIcons({ ionCalendar, ionArrowBack, ionArrowForward })],
})
export class DatePickerComponent implements OnInit, OnDestroy {
  @Input() label: string = '';
  @Input() customClass?: string = '';

  @Output() selectedDateChange = new EventEmitter<Date | null>();

  constructor(private uiComponentService: UiService) {}

  monthNames: string[] = monthNames;
  daysOfWeek: string[] = weekDays;

  currentDate: Date = new Date();
  currentMonth = this.currentDate.getMonth();
  currentYear = this.currentDate.getFullYear();

  nestedYear = this.currentYear;

  selectedDate: Date | null = null;
  isOpen = false;
  isNestedOpen = false;

  daysOfMonth: { dateLabel: number; isActive: boolean; date: Date }[] = [];

  id = 'date-picker-' + Math.random().toString(36).substring(2, 11);

  private uiSubscription: Subscription = new Subscription();

  @HostListener('document:click', ['$event'])
  onDocumentClick(_event: MouseEvent) {
    this.resetValues();
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.resetValues();
    }
  }

  resetValues() {
    this.isOpen = false;
    this.isNestedOpen = false;
    setTimeout(() => {
      if (!this.selectedDate) {
        this.currentDate = new Date();
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();
        this.nestedYear = this.currentYear;
        this.getMonthDays(this.currentYear, this.currentMonth);
      }
    }, 75);
  }

  getMonthName(month: number) {
    return this.monthNames[month];
  }

  getMonthDays(year: number, month: number) {
    this.daysOfMonth = [];

    const firstDayOfMonth = new Date(Date.UTC(year, month, 1)).getDay();
    const lastDateOfMonth = new Date(Date.UTC(year, month + 1, 0)).getDate();
    const lastDayOfMonth = new Date(Date.UTC(year, month + 1, 0)).getDay();

    for (let i = firstDayOfMonth; i > 0; i--) {
      this.daysOfMonth.push({
        date: new Date(Date.UTC(year, month, -i + 1)),
        dateLabel: new Date(Date.UTC(year, month, -i + 1)).getUTCDate(),
        isActive: false,
      });
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      this.daysOfMonth.push({
        date: new Date(Date.UTC(year, month, i)),
        dateLabel: i,
        isActive: true,
      });
    }

    let nextMonthDay = 1;
    for (let i = lastDayOfMonth + 1; i <= 6; i++) {
      const date = nextMonthDay++;
      this.daysOfMonth.push({
        date: new Date(Date.UTC(year, month + 1, date)),
        dateLabel: date,
        isActive: false,
      });
    }
  }

  handleMonthChange(direction: string) {
    if (direction === 'prev') {
      this.currentMonth -= 1;
      if (this.currentMonth === -1) {
        this.currentMonth = 11;
        this.currentYear -= 1;
      }
    } else {
      this.currentMonth += 1;
      if (this.currentMonth === 12) {
        this.currentMonth = 0;
        this.currentYear += 1;
      }
    }
    this.getMonthDays(this.currentYear, this.currentMonth);
  }

  handleYearChange(direction: string) {
    if (direction === 'prev') {
      this.nestedYear -= 1;
    } else {
      this.nestedYear += 1;
    }
    this.getMonthDays(this.currentYear, this.currentMonth);
  }

  setSelectedDate(date: Date) {
    if (date === this.selectedDate) {
      this.selectedDate = null;
      this.selectedDateChange.emit(null);
      return;
    }
    this.selectedDate = date;
    this.selectedDateChange.emit(date);
  }

  setSelectedMonth(month: number) {
    this.currentMonth = month;
    this.currentYear = this.nestedYear;
    this.isNestedOpen = false;
    this.getMonthDays(this.currentYear, this.currentMonth);
  }

  handleCalendarOpen() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.uiComponentService.openUIComponent(this.id);
    } else {
      this.uiComponentService.closeUIComponent();
    }
  }

  handleNestedCalendarOpen(e: Event | null, value?: boolean) {
    if (e) {
      e.stopPropagation();
    }
    if (value !== undefined) {
      this.isNestedOpen = value;
    } else {
      this.isNestedOpen = !this.isNestedOpen;
    }
    if (this.isNestedOpen) {
      this.uiComponentService.openUIComponent(this.id);
    } else {
      this.uiComponentService.closeUIComponent();
    }
    this.nestedYear = this.currentYear;
  }

  ngOnInit(): void {
    this.getMonthDays(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth()
    );

    this.uiSubscription = this.uiComponentService.openUIComponentId$.subscribe(
      (id: any) => {
        if (id !== this.id) {
          this.isOpen = false;
          this.isNestedOpen = false;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.uiSubscription.unsubscribe();
  }
}
