import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  
   <ul>
   <li (click)="onSelect(department)" *ngFor = "let department of departments">
   <button><span >{{department.id}} </span>{{department.name}}</button>
   </li></ul>
  `,
  styles: [`
  button{
    padding: 10px;
    margin: 10px;
  }`
  ]
})
export class DepartmentListComponent implements OnInit {
  departments = [
    {"id": "1", "name": "Angular"},
    {"id": "2", "name": "Node"},
    {"id": "3", "name": "MongoDB"},
    {"id": "4", "name": "Ruby"},
    {"id": "5", "name": "Bootstrap"}
  ];
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onSelect(department:any) {
    this.route.navigate(['/department',department.id])
  }

}
