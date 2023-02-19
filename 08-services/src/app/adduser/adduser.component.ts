import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
  // providers: [UserService], // it will create new instance and override parent's instance
})
export class AdduserComponent {
  username: string = '';
  status: string = 'active';

  constructor(private userService: UserService) {}

  AddUser() {
    this.userService.AddNewUser(this.username, this.status);
    console.log(this.userService.users);
  }
}
