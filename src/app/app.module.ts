import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { UserComponent } from './user/user.component';
import { StoreModule } from '@ngrx/store';
import { addCoinReducer } from './reducers/blockchain.reducer';
import { addUserReducer } from './reducers/user.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
// import { reducers, metaReducers, reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

/*     StoreModule.forRoot(reducers, { metaReducers }),
!environment.production ? StoreDevtoolsModule.instrument() : []*/
@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    UserComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ blockchain: addCoinReducer, user: addUserReducer }),
    ReactiveFormsModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
