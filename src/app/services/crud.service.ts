import { Injectable } from '@angular/core';
import { Crud } from '../models/crud';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  crudsRef: AngularFireList<any>;

  constructor(private data: AngularFireDatabase ) { }


  addCrud(crud: Crud){
    this.crudsRef.push({
      login: crud.login,
      password: crud.password,
      polynomial: crud.polynomial
    })
  }

}
