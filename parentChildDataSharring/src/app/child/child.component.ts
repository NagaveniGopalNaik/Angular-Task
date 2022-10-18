import { Component, OnInit,Input,Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {
text="";
@Input() name: string = '';
@Input() data:any;
message : string ="This is the message getting from the child component using view child method";

@Output() displayAge  = new EventEmitter();

  constructor( private service : ServiceService) { }
  
  ngOnInit(): void {
    this.displayAge.emit(29)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  displayage(value:any){
    this.displayAge.emit(value);
  }
  
  updateText(text:any){
    // debugger;
    this.service.updateData(text);
  }
}
