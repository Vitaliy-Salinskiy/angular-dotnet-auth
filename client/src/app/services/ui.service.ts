import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private openUIComponentId = new BehaviorSubject<string | null>(null);

  openUIComponentId$ = this.openUIComponentId.asObservable();

  openUIComponent(id: string) {
    this.openUIComponentId.next(id);
  }

  closeUIComponent() {
    this.openUIComponentId.next(null);
  }
}
