import { Injectable, EventEmitter } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employeeEmitter = new EventEmitter<Employee>()

  constructor() { }
}
