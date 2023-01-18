import { Component } from '@angular/core';

import { ToDo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-crash-course';
  
  todoValue: string;
  list: ToDo[];

  ngOnInit(){
    this.todoValue = '';
    this.list = [];
  }

addItem(){
  if(this.todoValue !== ''){

    const newItem: ToDo = {
      id: Date.now(),
      value: this.todoValue,
      isDone: false
    } 

    this.list.push(newItem);
  }

  this.todoValue = '';
}

deleteItem(id:number){
 this.list =  this.list.filter(item => item.id !== id);
}

}
