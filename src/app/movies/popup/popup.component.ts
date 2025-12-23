import { Component, output } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent {
  public readonly closeButtonClick = output();

  protected closeButtonClickHandler(): void {
    this.closeButtonClick.emit();
  }
}
