import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.scss'],
})
export class ItemInputComponent {
  @Input() item!: string;
}
