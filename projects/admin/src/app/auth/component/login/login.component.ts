import { AuthService } from './../../service/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide:boolean = true
  changevalue(){
    this.hide = !this.hide
  }
  FormLogin:FormGroup=new FormGroup({})
  constructor(private _FB:FormBuilder ,
     private _authservice:AuthService,
     private _toastr:ToastrService,
     private _router:Router,
     private spinner: NgxSpinnerService
     ){
    this.crateForm()
  }
  crateForm(){
    this.FormLogin=this._FB.group({
      email:['',[Validators.required , Validators.email]],
      password:['',[Validators.required , Validators.minLength(3) , Validators.maxLength(12)]],
      role:['admin']
    })
  }
 /*  FormLogin:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required , Validators.email]),
    password:new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(12)])
  }) */
  messageerror:string=''
  isLoading=false
  login(loginForm : FormGroup){
    this.isLoading=true
    this._authservice.login(loginForm.value).subscribe({
      next:(res)=>{
        localStorage.setItem('token',res.token)
        this.isLoading=false
        this._toastr.success('login success','',{
          positionClass: 'toast-bottom-right'
        })
        this._router.navigate(['/'])
        this.messageerror=''
      },
      error:(err)=>{
        this.isLoading=false
        this._toastr.error(err.error.message)
      }
    })
  }

}
