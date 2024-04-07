import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../interface/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpclient:HttpClient) { }

  login(loginForm:Login):Observable<any>{
    return this._httpclient.post('https://crud-27v6.onrender.com/auth/login',loginForm )
  }
}
