import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
// import { DepartmentsComponent } from './departments/departments.component';
// import { EmployeesComponent } from './employees/employees.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
// import { DepartmentDetailsComponent } from './department-details/department-details.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
