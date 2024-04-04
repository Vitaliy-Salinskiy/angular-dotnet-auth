import { DOCUMENT, CommonModule } from '@angular/common';
import {
  Component,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'auth-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-btn.component.html',
})
export class AuthButtonComponent implements OnChanges {
  public auth = inject(AuthService);
  public document = inject(DOCUMENT);

  ngOnChanges(changes: SimpleChanges): void {
    console.log('AuthButtonComponent.ngOnChanges', this.auth.user$);
  }
}
