import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeesComponent, EmployeeListComponent, EmployeeFormComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class EmployeesModule { }
