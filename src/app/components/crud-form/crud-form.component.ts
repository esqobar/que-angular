import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {

 public myForm: FormGroup;

  constructor( private fb: FormBuilder, private crudservice: CrudService ) { }
  

  ngOnInit(): void {
    this.mForm();
  }
  
  mForm(){
    this.myForm = this.fb.group({
      login: [ '', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{10}')]],
      password: [ '', [Validators.required] ],
      polynomial: ['', [Validators.required] ]
    })
  }

  get login() {
    return this.myForm.get('login');
  }

  get password() {
    return this.myForm.get('password');
  }
  get polynomial() {
    return this.myForm.get('polynomial');
  }

  
  create(){
    this.crudservice.addCrud(this.myForm.value);
    this.myForm.reset();
  }
}
