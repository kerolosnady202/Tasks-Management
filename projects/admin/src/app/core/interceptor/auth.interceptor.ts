import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   if(
    request.url.includes('tasks') ||
    request.url.includes('users') ||
    request.url.includes('user')
  ){
    const newrequest=request.clone({
      headers:request.headers.append('Authorization','Bearer ' + localStorage.getItem('token'))
     })
     return next.handle(newrequest);
   }
   return next.handle(request)
   /* const newrequest=request.clone({
    headers:request.headers.append('Authorization','Bearer ' + localStorage.getItem('token'))
   })
   return next.handle(newrequest); */
  }
}
