import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DepartmentsComponent } from './departments/departments.component';
// import { EmployeesComponent } from './employees/employees.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
// import { DepartmentDetailsComponent } from './department-details/department-details.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
