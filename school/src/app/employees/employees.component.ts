import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  template: `
    <p>
      employees works!
    </p>
    <ul style="list-style:none" *ngFor = "let employee of employees">
    <li (click)="onSelect(employee)">{{employee.name}}</li>
    </ul>
  `,
  styles: [
    `li{
      border:1px solid black;
      padding : 2px;
      width : 20%;
    }`
  ]
})
export class EmployeesComponent implements OnInit {
  public employees = [
    {"id":1,"name": "John", "age":18},
    {"id":2,"name": "Doe", "age":23},
    {"id":3,"name": "Jane", "age":22},
    {"id":4,"name": "Doe", "age":56},
    {"id":5,"name": "Jane", "age":41},
    {"id":6,"name": "Doe", "age":45},
    {"id":7,"name": "Jane", "age":34},
    {"id":8,"name": "Doe", "age":67},
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSelect(employee:any){
    this.router.navigate(['/employees', employee.id]);
  }

}
