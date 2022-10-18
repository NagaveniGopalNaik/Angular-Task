import { Component, OnInit,Input } from '@angular/core';
import {ChildComponent} from '../child/child.component';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit  {
  message1: string = '';
  @Input() age : number = 0;
  
  constructor( private service : ServiceService) { }

  
  ngOnInit(): void {
    this.message1 = this.service.getMessage();
  }

}
