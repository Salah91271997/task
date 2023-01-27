import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Employee, filters } from 'src/app/interface/employee';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss'],
})
export class FormTableComponent implements OnInit {
  constructor(private http: HttpService, private builder: FormBuilder) {}
  filterForm!: FormGroup;
  employees!: Employee[];
  filters!: filters[];

  ngOnInit(): void {
    this.http
      .getEmployees(' http://localhost:3000/employees')
      .subscribe((employees) => {
        console.log(employees);
        this.employees = employees;
      });
    this.http
      .getfilters(' http://localhost:3000/filters')
      .subscribe((filters) => {
        console.log(filters);
        this.filters = filters;
      });
    this.InitForm();
    console.log(this.filterForm.value);
  }

  print() {
    console.log(this.filterForm.value);
    console.log(this.employees);
  }
  // Init Form
  InitForm(): void {
    this.filterForm = this.builder.group({
      name: new FormControl(null, {
        validators: [Validators.required],
      }),
      emplyemenyDate: new FormControl(null, {
        validators: [Validators.required],
      }),
      departement: new FormControl(null, {
        validators: [Validators.required],
      }),
      salary: new FormControl(null, {
        validators: [Validators.required],
      }),
      experience: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
  }
  // clear form
  onClear() {
    this.filterForm.reset();
  }
}
