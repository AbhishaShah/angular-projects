import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.scss'],
})
export class ItemOutputComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem = (value: string) => this.newItemEvent.emit(value);
}
