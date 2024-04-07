import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { confirmValidator } from '../../validator/confirm.validator';
import { CreateAccount } from '../../interface/interface';
import { ToastrService } from 'ngx-toastr';
/* import { validatorPass } from '../../validator/confirm.validator'; */

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private _fb:FormBuilder,
    private _auth:AuthService,
    private _toastr:ToastrService,
    private _route:Router
  ){
    this.creatForm()

  }
  registerForm:FormGroup=new FormGroup({})
  isLoading:boolean=false
  hide:boolean=true
  hiderepass:boolean=true
  changevalue(){
    this.hide=!this.hide
  }
  changevalue2(){
    this.hiderepass=!this.hiderepass
  }
  creatForm(){
    this.registerForm=this._fb.group({
      email:['',[Validators.required , Validators.email]],
      password:['',[Validators.required , Validators.minLength(3) , Validators.maxLength(12)]],
      confirmpass:['',[Validators.required , Validators.minLength(3) , Validators.maxLength(12)]],
      username:['',[Validators.required ]],
      /* role:['user'] */
    }
    ,
    {validators:confirmValidator})
  }
  register(registerForm:FormGroup){
        const model:CreateAccount={
          email:registerForm.get('email')?.value,
          password:registerForm.get('password')?.value ,
        username:registerForm.get('username')?.value,
        role:'user'
    }
    this.isLoading=true
    this._auth.register(model).subscribe({
      next:(res)=>{
        this.isLoading=false
        this._toastr.success('register is success')
        this._route.navigate(['/auth/login'])
      },
      error:(err)=>{
        this.isLoading=false
      }

    })
    }



}
