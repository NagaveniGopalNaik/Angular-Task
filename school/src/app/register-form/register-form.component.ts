import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
public dis = false;
public display = false
  // Create reactive form
  employeeForm: FormGroup;
  Gender:any=['male','female','other'];
  constructor(private fb:FormBuilder) { 
    
  }
  
  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      'fname':['',[
        Validators.pattern('^[a-zA-Z ]+$'),
        Validators.maxLength(50),
        Validators.required,
      ]],
      'lname':['',[
        Validators.pattern('^[a-zA-Z ]+$'),
        Validators.maxLength(50),
        Validators.required,
      ]],
      'gender':[''],
      'email':['',[
        Validators.required,
        Validators.email,
        Validators.required
      ]],
      'contact':['',[
        Validators.required,
        Validators.pattern('[0-9]{10}')
      ]],
      'age':['',[Validators.pattern('[0-9]{2}')]],
      'experience': this.fb.array([]),
      
    });
    

   
  }
onSubmit(){
  console.log(this.employeeForm);
  
  
}
experienceDetails(){
  return this.fb.group({
    'companyName':[''],
    'experiences':[''],
    'workingDomain':[''],
  });
}

isValid(age:any){
  // console.log(age.value);
  
  if(age.value >60){
    return true;
  } else{
    return false;
  }
}

formReset(){
  this.employeeForm.reset();
}
get employeeArray(){
  
  return (<FormArray>this.employeeForm.get('experience'));
}
addExperience(){
  // (<FormArray>this.employeeForm.get(['experience','companyName'])).push(new FormControl(null));
  // (<FormArray>this.employeeForm.get(['experience','experiences'])).push(new FormControl(null));
  // (<FormArray>this.employeeForm.get(['experience','workingDomain'])).push(new FormControl(null));
  // let empArray : any = (<FormArray>this.employeeForm.get('experience')) as FormArray;
  // let arrLength : any= empArray.length;
  
  
  // console.log(this.employeeArray.value);
  // console.log(this.employeeForm.get('experience')['controls']);
  
  this.employeeArray.push(this.experienceDetails());
  // console.log(<FormArray>this.employeeForm.get('experience'));
  
  // console.log(this.employeeForm);
  
  
  this.dis=true;

  // addFormControl() {
  //   let usersArray = this.usersForm.controls.users as FormArray;
  //   let arraylen = usersArray.length;

  //   let newUsergroup: FormGroup = this.fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', Validators.pattern(emailRegex)]
  //   })

  //   usersArray.insert(arraylen, newUsergroup);
  // }

}

removeExperience(i){
  let arr = this.employeeForm.get('experience') as FormArray;
  arr.removeAt(i);
}

add(value:any){
  console.log(value);
  
  switch(value){
    case 'experience' : this.addExperience();
                        break;
  };
}
}
