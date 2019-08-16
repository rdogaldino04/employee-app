import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeesService } from '../employees.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private mEmployeesService: EmployeesService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required]],
      salary: [null, [Validators.required]],
      age: [null, [Validators.required]]
      //{"name":"test","salary":"123","age":"23"}
    });

    this.mEmployeesService.employeeEmitter.subscribe( (o: Employee) => {
      //console.log(o);
      this.formulario.patchValue({ id: o.id });
      this.formulario.patchValue({ name: o.employee_name });
      this.formulario.patchValue({ salary: o.employee_salary });
      this.formulario.patchValue({ age: o.employee_age });
    } );    
  }

  onSubmit() {
    let submit = Object.assign({}, this.formulario.value);
    console.log(submit);
    if (submit.id === null) {
      this.insert(submit);
    } else {
      //console.log('to do atualizar');
      this.update(submit);
    }
  }


  private update(submit: any) {
    const url = `${environment.uriBase}update/${submit.id}`;
    this.http.put(url, submit).subscribe(dados => {
      console.log('Atualizado com sucesso!');
      console.log(dados);
      this.formulario.reset();
    }, (erro: any) => {
      console.log('Erro ao atualizar');
      console.log(erro);
    });
  }

  private insert(submit: any) {
    const url = `${environment.uriBase}create`;
    this.http.post(url, submit)
      .subscribe(dados => {
        console.log('Salvo com sucesso!');
        console.log(dados);
        this.formulario.reset();
      }, (erro: any) => {
        console.log('Erro ao salvar');
        console.log(erro);
      });
  }
}
