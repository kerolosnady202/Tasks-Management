import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { AuthInterceptor } from './interceptor/auth.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoadingInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
  ]
})
export class CoreModule { }
