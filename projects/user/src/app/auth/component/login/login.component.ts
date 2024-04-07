import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Login } from '../../interface/interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private _fb:FormBuilder,
    private _auth:AuthService,
    private _toasr:ToastrService,
    private _router:Router
    ){
  this.createForm()
  }
  /* loginForm:FormGroup=new FormGroup({}) */
  loginForm!:FormGroup
  hide:boolean=true
  isLoading:boolean=false
  changevalue(){
    this.hide=!this.hide
  }
  createForm(){
   this.loginForm=this._fb.group({
      email:['',[Validators.required , Validators.email]],
      password:['',[Validators.required , Validators.minLength(3) , Validators.maxLength(12)]],
      role:['user']
    })
  }
  login(FormLogin:FormGroup){
 /*    const model:Login={
      email:FormLogin.get('email')?.value,
      password:FormLogin.get('password')?.value ,
      role:'user'
} */


    this.isLoading=true
   this._auth.login(FormLogin.value).subscribe({
    next:(res)=>{
      this.isLoading=false
      localStorage.setItem('token',res.token)
      this._toasr.success('login is success')
      this._router.navigate(['/tasks'])
    },
    error:(err)=>{
      this.isLoading=false
    }
   })
  }

}
