import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private logger: LoggerService) {}

  users = [
    { name: 'John', status: 'active' },
    { name: 'Shah', status: 'inactive' },
  ];

  AddNewUser(name: string, status: string) {
    this.users.push({ name, status });

    this.logger.LogMessage(name, status);
  }
}
