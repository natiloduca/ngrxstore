// blockchain.reducer.ts

import { Blockchain } from './../blockchain/blockchain.model';
import { Action } from '@ngrx/store';

export const ADD_COIN = 'ADD_COIN';

export function addCoinReducer(state: Blockchain[] = [], action) {
  switch (action.type) {
    case ADD_COIN:
      // console.log('state=', state); lo que va guardando en state
      // console.log('payload=', action.payload); propiedades a guardar
      return [...state, action.payload];
    default:
      return state;
  }
}
