// blockchain.reducer.ts

import { User } from '../user/user.model';
import { Action } from '@ngrx/store';

export const ADD_USER = 'ADD_USER';

export function addUserReducer(state: User[] = [], action) {
  switch (action.type) {
    case ADD_USER:
      // console.log('state=', state); lo que va guardando en state
      // console.log('payload=', action.payload); propiedades a guardar
      return [...state, action.payload];
    default:
      return state;
  }
}
