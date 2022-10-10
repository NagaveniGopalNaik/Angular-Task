import { Component, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName:string="";
  terms:boolean=false;
  gender:string='';
  email:string="";
  professional:string="";
  password:string="";
  lastName:string="";
  address:string="";
  constructor() { }

  ngOnInit(): void {
  }

  addUser(user:NgForm){
    console.log(user.value);
    
  }

  // apply HostListener to submit button
  @HostListener('submit') submit(){
    alert("Registration successfull");
  };

  // @HostListener('submit', ['$event'])
  // onSubmit(event: Event) {
  //   console.log('Form submitted!');
  //   event.preventDefault();
  // }



  resetForm(forValue:NgForm){
    // forValue.reset();
    forValue.resetForm();
  }
}
