const EMPLOYEES = [
  { name: 'employee1', role: 'Project Manager' },
  { name: 'employee2', role: 'QA' },
];

export class EmployeeState {
  employees: { name: string; role: string }[] = EMPLOYEES;
}
