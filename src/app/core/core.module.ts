import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { FirebaseService } from './firebase.service';

import { HttpCacheService } from './http-cache.service';

import { AddHeaderInterceptor } from './add-header.interceptor';
import { LogResponseInterceptor } from './log-response.interceptor';
import { CacheInterceptor } from './cache.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [
    FirebaseService,
    { provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: LogResponseInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true},
    HttpCacheService
  ]
})
export class CoreModule { }
