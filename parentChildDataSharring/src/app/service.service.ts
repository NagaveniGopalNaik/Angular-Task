import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data :string="Gopal Naik";
private content = new BehaviorSubject<string>("default value");
public share = this.content.asObservable();

  constructor() { }
  updateData(text:any){
    this.content.next(text);
  }

  setMessage(data:any){
    this.data = data;
  }

  getMessage(){
    return this.data;
  }
}
