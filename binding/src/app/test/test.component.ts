// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-test',
//   template: `
//   <h1>
//   Hello {{name}}
//   </h1>
//   <h1>{{2 + 2}}</h1>
//   <h1>{{"welcome " + name}}</h1>
//   <h1>{{name.length}}</h1>
//   <h1>{{name.toUpperCase()}}</h1>
//   <h1>{{greetUser()}}</h1>
//   <h1>{{siteUrl}}</h1>
//   <input type="text" value="nagaveni">`,
//   styles: [`h1{
//     color : green;
//   }`]
// })
// export class TestComponent implements OnInit {
//   public name = "Nagaveni";
//   public siteUrl = window.location.href;
//   constructor() { }

//   ngOnInit(): void {
//   }

//   greetUser(){
//     return "Hello " + this.name;
//   }

// }

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-test',
//   template: `
//   <input type="text" value="nagaveni">
//   <input disabled type="text" value="nagu">
//   <input [disabled] = false type="text" value="nagaveni">
//   <input [disabled] = "isDisabled" type="text" value="nagu">
//   <input bind-disabled = "isDisabled" type="text" value="nagu">`,
//   styles: [`h1{
//     color : green;
//   }`]
// })
// export class TestComponent implements OnInit {
//   public name = "Nagaveni";
//   public siteUrl = window.location.href;
//   public isDisabled = false;
//   constructor() { }

//   ngOnInit(): void {
//   }

//   greetUser(){
//     return "Hello " + this.name;
//   }

// }

//class binding

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-test',
//   template: `
//   <input class = "isError" type="text"  value="nagaveni">
//   <h1 class="success"> successful</h1>
//   <h2 [class.isError] = "hasError">hello world</h2>
//   <h3 [ngClass] = "messageClass">Wonderful</h3>
//   <h4 [style.color] = "'orange'">Style binding</h4>
//   <h4 [style.color] = "hasError?'red':'green'">Style binding 1</h4>
//   <h4 [style.color] = "highlightColor">Style binding3</h4>
//   <h5 [ngStyle] = "titleStyles">hello world</h5>`,
//   styles: [`
//   .isError{
//     color : red;
//   }
//   .success{
//     color : green;
//   }
//   .isSpecial{
//     font-style:italic;
//   }`]
// })
// export class TestComponent implements OnInit {
//   public name = "Nagaveni";
//   public siteUrl = window.location.href;
//   public isDisabled = false;
//   public isError = true;
//   public hasError = false;
//   public isSpecial = false;
//   public messageClass = {
//     "success": !this.hasError,
//     "isError": this.isError,
//     "isSpecial": this.isSpecial
//   }
//   public highlightColor = "yellow";
//   public titleStyles = {
//     color : "blue",
//     fontStyle : "italic"
//   }
//   constructor() { }

//   ngOnInit(): void {
//   }

//   greetUser(){
//     return "Hello " + this.name;
//   }

// }

//event binding

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-test',
//   template: `
//   <button (click)="onClick($event)"> Hello </button>
//   {{greeting}}
//   `,
//   styles: [`
//   .isError{
//     color : red;
//   }
//   .success{
//     color : green;
//   }
//   .isSpecial{
//     font-style:italic;
//   }`]
// })
// export class TestComponent implements OnInit {
//   public hello ="hello world";
//   public greeting = "" ;
//   public count = 1;
//   constructor() { }

//   ngOnInit(): void {
//   };
//   onClick(event:any){
//     // console.log("welcome to Angular tutorial"+this.count);
//     // this.greeting = "hello , welcome to angular tutorial"+this.count;
//     // this.count += 1;
//     console.log(event);
    
//     console.log(event.type);
//     console.log(event.path);
    
//   }


// }

//Template reference variables
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <input #myInput type = "text" >
  <button (click) = "logMessage(myInput.value)">log</button>
  `,
  styles: [``]
})
export class TestComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  };
  logMessage(msg:any){
    console.log(msg);
  }


}




