import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';

import { FirebaseUIModule } from 'firebaseui-angular';
import { firebaseUiAuthConfig } from '../firebase/firebaseui.config';

import { AppRoutingModule } from '../app-routing.module';
import { NbButtonModule} from '@nebular/theme';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/auth.reducer';

@NgModule({
  declarations: [
    AuthComponent],
  imports: [
    CommonModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    AppRoutingModule,
    NbButtonModule,
    StoreModule.forFeature('auth', reducer)
  ],
  exports: [
    AppRoutingModule,
    AuthComponent
  ]
})
export class AuthModule { }
