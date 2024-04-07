import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private _toastr:ToastrService,
    private _router:Router
    ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err:HttpErrorResponse)=>{
        this._toastr.error(err.error.message)
        if (err.error.message == 'jwt expired' ||err.error.message == "jwt malformed") {
            this._router.navigate(['/auth/login'])
            localStorage.removeItem('token')
        }
        throw err
      })
    );
  }
}
