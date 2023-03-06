import { Injectable } from '@angular/core';
import { Store } from 'rxjs-observable-store';

import { EmployeeState } from './employee-state';

@Injectable()
export class EmployeeStore extends Store<EmployeeState> {
  constructor() {
    super(new EmployeeState());
  }

  addEmployee(person: { name: string; role: string }): void {
    this.setState({
      ...this.state,
      employees: [...this.state.employees, person],
    });
  }
}
