import { Component, Input, forwardRef } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

import { ionBed } from '@ng-icons/ionicons';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './input.component.html',
  viewProviders: [provideIcons({ ionBed })],
})
export class InputComponent {
  @Input() label?: string = '';
  @Input() placeholder?: string = '';
  @Input() type: string = 'text';
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() icon: string = '';
  @Input() customClass?: string = '';

  id = 'custom-input-' + Math.random().toString(36).substring(2, 11);
}
