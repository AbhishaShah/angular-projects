import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  userName = 'testuser';
  isChildDestroyed = false;

  updateUser = () => {
    this.userName = 'Shah';
  };

  ngOnInit() {
    console.log('ngOnInit from the parent component');
  }

  destroy() {
    this.isChildDestroyed = true;
  }
}
