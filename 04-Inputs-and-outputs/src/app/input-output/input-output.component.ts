import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent {
  @Input() items!: Array<string>;

  @Output() itemOndelete = new EventEmitter<string>();

  deleteItem = (value: string) => {
    this.itemOndelete.emit(value);
  };
}
