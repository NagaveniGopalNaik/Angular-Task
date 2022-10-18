import { Component ,ViewChild,AfterViewInit} from '@angular/core';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'parentChildDataSharring';
  name = "nagaveni";
  data = [{'name':'nagaveni',
'age':22}];
age =0;
message1 = '';
@ViewChild(Child2Component) child !: Child2Component;
ngAfterViewInit(): void {
  this.message1 = this.child.message;
  console.log(this.child.message)
}
displayAge(value:any){
  this.age = value;
}
}
