import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  users = [
    { name: 'John', status: 'active' },
    { name: 'Shah', status: 'inactive' },
  ];

  AddNewUser(name: string, status: string) {
    this.users.push({ name, status });
  }
}
