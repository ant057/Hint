import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';

import { FirebaseUIModule } from 'firebaseui-angular';
import { firebaseUiAuthConfig } from '../firebase/firebaseui.config';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    AppRoutingModule,
  ],
  exports: [
    AppRoutingModule,
    AuthComponent
  ]
})
export class AuthModule { }
