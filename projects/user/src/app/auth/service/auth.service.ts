import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CreateAccount, Login } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpclient:HttpClient) {

  }
   login(loginForm:FormGroup):Observable<any>{
    return this._httpclient.post('https://crud-27v6.onrender.com/auth/login',loginForm )
   }
   register(registeForm:CreateAccount):Observable<any>{
    return this._httpclient.post('https://crud-27v6.onrender.com/auth/createAccount',registeForm )
   }
}
