import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [EmployeesComponent, EmployeeListComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
