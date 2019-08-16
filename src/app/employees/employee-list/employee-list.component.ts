import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  mEmployees: Employee[];

  constructor(private mHttpClient: HttpClient,
    private mEmployeesService: EmployeesService) { }

  ngOnInit() {
    //console.log(`${environment.uriBase}employees`)
    this.mHttpClient.get(`${environment.uriBase}employees`).subscribe((o: Employee[]) => {
      //console.log(o);
      this.mEmployees = o;
    });
  }

  delete (id: string) {
    console.log(id);
    const url = `${environment.uriBase}delete/${id}`;
    this.mHttpClient.delete(url).toPromise()
      .then( _ => {
        console.log('deletado com sucesso!');
        this.reload(id);
      })
      .catch(err => console.log('Erro ao deletar: ', err));
  }

  reload(id: string) {
    this.mEmployees = this.mEmployees.filter(ele => ele.id !== id);
  }

  enviaDadosParaAtualizar(emp: Employee) {
    //console.log(emp);
    this.mEmployeesService.employeeEmitter.emit(emp);
  }

}
