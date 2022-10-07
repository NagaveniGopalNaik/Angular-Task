import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  public name:any;
  public departments =[
    {"id":100,"name":"Angular"},
    {"id":101,"name":"Angular 2"},
    {"id":102,"name":"Angular 3"},
    {"id":103,"name":"Angular 4"},
    {"id":104,"name":"Angular 5"},
    {"id":105,"name":"Angular 6"}
  ]
  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    })
  }

  onSelect(department:any){

    this.router.navigate(['/departments',department.id]);
    
    
  }

}
