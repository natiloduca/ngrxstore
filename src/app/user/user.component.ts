// blockchain.component.ts

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user.model';
import { AppState } from '../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fillProperties } from '@angular/core/src/util/property';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  angForm: FormGroup;
  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      dni: ['', Validators.required]
    });
  }

  addUser(name, dni) {
    this.store.dispatch({
      type: 'ADD_USER',
      payload: <User>{
        name: name,
        dni: dni
      }
    });
  }

  ngOnInit() {}
}
