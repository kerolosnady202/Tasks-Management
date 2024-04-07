import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class LoadInterceptor implements HttpInterceptor {
  counter = 0
  constructor(private _spinner:NgxSpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

   if (request.url.includes('login')) {
     return next.handle(request)
   }else{
    this.counter ++
    this._spinner.show()
    return next.handle(request).pipe(
      finalize(()=>{
        this.counter --
      if (this.counter == 0) {
        this._spinner.hide()
      }
    }));
   }
  }
}
