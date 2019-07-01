import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPaymentComponent } from './add-payment/add-payment.component';
import { AddEventComponent } from './add-event/add-event.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbButtonModule, NbInputModule,
  NbDatepickerModule, NbRadioModule, NbCardModule, NbMenuModule, NbActionsModule, NbWindowModule, 
  NbListModule, NbTooltipModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CalendarComponent } from './calendar/calendar.component';

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
    NbThemeModule.forRoot({ name: 'dark' }), 
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
    NbTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
