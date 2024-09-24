import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { ionChevronDown, ionCheckmark, ionPerson } from '@ng-icons/ionicons';

import { UiService } from '../../services/ui.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IBasicSelect } from '../../../interfaces';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NgIconComponent, NgClass, ReactiveFormsModule],
  templateUrl: './select.component.html',
  viewProviders: [provideIcons({ ionChevronDown, ionCheckmark, ionPerson })],
})
export class SelectComponent<T extends IBasicSelect<string>>
  implements OnInit, OnDestroy
{
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() data: T[] = [];
  @Input() customClass?: string = '';
  @Input() formGroup!: FormGroup;
  @Input() controlName: string = '';

  @Output() selectedValueChange = new EventEmitter<object>();

  private uiSubscription: Subscription = new Subscription();

  constructor(private uiService: UiService) {}

  id = Math.random().toString(36).substring(2, 11);

  isOpen = false;
  selectedItem: T | null = null;

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
    if (this.isOpen) {
      this.uiService.openUIComponent(this.id);
    } else {
      this.uiService.closeUIComponent();
    }
  }

  ngOnInit(): void {
    this.uiSubscription = this.uiService.openUIComponentId$.subscribe(
      (id: any) => {
        if (id !== this.id) {
          this.isOpen = false;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.uiSubscription.unsubscribe();
  }
}
