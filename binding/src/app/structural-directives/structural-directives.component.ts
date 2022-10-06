import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
  public display = false;
  public color = "blue";
  public colors = ["red", "green", "yellow", "orange"];
  public date = new Date();
  @Input('parentData') public name:any;
  @Output() public childEvent = new EventEmitter();
  public person = {
    "fname" : "nagaveni",
    "lname" : "naik"
  }
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit("hey codevolution");
  }
}
