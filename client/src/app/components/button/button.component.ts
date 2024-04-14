import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBuildingOffice2Solid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './button.component.html',
  viewProviders: [provideIcons({ heroBuildingOffice2Solid })],
})
export class ButtonComponent {
  @Input() customClass?: string = '';
  @Input() text: string = '';
  @Input() icon?: string = '';
  @Input() type? = 'button';
  @Input() disabled? = false;
  @Input() clickFn?: () => void;
}
