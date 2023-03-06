import { Component, OnInit } from '@angular/core';
import { EmployeeStore } from './store/employee-store';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [EmployeeStore],
})
export class EmployeeComponent implements OnInit {
  constructor(public store: EmployeeStore) {}

  ngOnInit(): void {
    this.store.state$.subscribe((state) => {
      // Logic to execute on state update
    });
  }

  // addEmployee(employee: { name: string; role: string }): void {
  //   this.store.addEmployee(employee);
  // }
}
