import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { ionChevronDown, ionCheckmark, ionPerson } from '@ng-icons/ionicons';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NgIconComponent, NgClass],
  templateUrl: './select.component.html',
  viewProviders: [provideIcons({ ionChevronDown, ionCheckmark, ionPerson })],
})
export class SelectComponent implements OnInit {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() data: any[] = [];
  @Input() customClass?: string = '';

  @Output() selectedValueChange = new EventEmitter<object>();

  id = Math.random().toString(36).substring(2, 11);

  isOpen = false;
  selectedItem: any;

  @HostListener('document:click', ['$event'])
  onClick(_event: MouseEvent) {
    this.isOpen = false;
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.isOpen = false;
    }
  }

  onValueChange(value: number) {
    this.selectedItem = this.data[value];
    this.isOpen = false;
    this.selectedValueChange.emit(this.selectedItem);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
    this.selectedItem = this.data[1];
  }
}
