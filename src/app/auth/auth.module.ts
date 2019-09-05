// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';

// firebase ui
import { FirebaseUIModule } from 'firebaseui-angular';
import { firebaseUiAuthConfig } from '../firebase/firebaseui.config';

import { AppRoutingModule } from '../app-routing.module';
import { NbButtonModule} from '@nebular/theme';

// ngrx store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './state/auth.reducer';
import { AuthEffects } from './state/auth.effects';

@NgModule({
  declarations: [
    AuthComponent],
  imports: [
    CommonModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    AppRoutingModule,
    NbButtonModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [
    AppRoutingModule,
    AuthComponent
  ]
})
export class AuthModule { }
