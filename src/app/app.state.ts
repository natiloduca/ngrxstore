// app.state.ts

import { Blockchain } from './blockchain/blockchain.model';
import { User } from './user/user.model';

export interface AppState {
  readonly blockchain: Blockchain[];
  readonly user: User[];
}
