import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = '04-Inputs-and-outputs';

  items: Array<string> = ['01:Component', '02:Template', '03:Module'];

  currentItem: string = '01:Component';

  addItem = (newItem: string) => this.items.push(newItem);
}
