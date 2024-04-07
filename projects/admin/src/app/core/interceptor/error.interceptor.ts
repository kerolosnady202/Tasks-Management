import { Router } from '@angular/router';
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

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private _toastr:ToastrService,
    private _router:Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error : HttpErrorResponse)=>{
        this._toastr.error(error.error.message)
        if (error.error.message == "jwt expired" ||error.error.message == "jwt malformed") {
            this._router.navigate(['/login'])
            localStorage.removeItem('token')
        }
        throw error
      })
    );
  }
}
