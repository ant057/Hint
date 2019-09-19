// bootstrap
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// feature modules
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';

// ngrx store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './state/app.reducer';
import { AppEffects } from './state/app.effects';

// vars
import { environment } from '../environments/environment';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { AddEventComponent } from './add-event/add-event.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FlexLayoutModule } from '@angular/flex-layout';

// ui
import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbButtonModule, NbInputModule,
  NbDatepickerModule, NbRadioModule, NbCardModule, NbMenuModule, NbActionsModule, NbWindowModule,
  NbListModule, NbTooltipModule, NbCheckboxModule, NbSelectComponent, NbSelectModule, NbSpinnerModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

// firestore
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { fromEventPattern } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    DashboardComponent,
    AddPaymentComponent,
    AddEventComponent,
    CalendarComponent
  ],
  entryComponents: [
    AddPaymentComponent,
    AddEventComponent
  ],
  imports: [
    CoreModule,
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    // FlexLayoutModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbInputModule,
    NbDatepickerModule.forRoot(),
    NbRadioModule,
    NbCardModule,
    NbMenuModule.forRoot(),
    NbMenuModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbWindowModule.forRoot(environment.windowConfig),
    NbListModule,
    NbTooltipModule,
    NbCheckboxModule,
    NbSelectModule,
    NbSpinnerModule,
    StoreModule.forRoot({ app: reducer}),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Hint OS Dev tools',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
