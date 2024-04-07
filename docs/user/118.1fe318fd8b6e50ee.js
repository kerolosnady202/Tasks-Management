"use strict";(self.webpackChunkuser=self.webpackChunkuser||[]).push([[118],{2118:(W,c,a)=>{a.r(c),a.d(c,{AuthModule:()=>G});var p=a(6814),m=a(86),t=a(95),e=a(4946),u=a(9862);let g=(()=>{class r{constructor(o){this._httpclient=o}login(o){return this._httpclient.post("https://crud-27v6.onrender.com/auth/login",o)}register(o){return this._httpclient.post("https://crud-27v6.onrender.com/auth/createAccount",o)}static#e=this.\u0275fac=function(i){return new(i||r)(e.LFG(u.eN))};static#r=this.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var d=a(2425);function _(r,s){1&r&&(e.TgZ(0,"span"),e._uU(1,"your email required"),e.qZA())}function h(r,s){1&r&&(e.TgZ(0,"span"),e._uU(1,"your email invaild"),e.qZA())}function Z(r,s){if(1&r&&(e.TgZ(0,"div",20),e.YNc(1,_,2,0,"span",17),e.YNc(2,h,2,0,"span",17),e.qZA()),2&r){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",null==o.loginForm.controls.email.errors?null:o.loginForm.controls.email.errors.required),e.xp6(1),e.Q6J("ngIf",null==o.loginForm.controls.email.errors?null:o.loginForm.controls.email.errors.email)}}function v(r,s){1&r&&(e.TgZ(0,"span"),e._uU(1,"your password required"),e.qZA())}function T(r,s){1&r&&(e.TgZ(0,"span"),e._uU(1,"your pass is short"),e.qZA())}function F(r,s){1&r&&(e.TgZ(0,"span"),e._uU(1,"your pass is long"),e.qZA())}function x(r,s){if(1&r&&(e.TgZ(0,"div",20),e.YNc(1,v,2,0,"span",17),e.YNc(2,T,2,0,"span",17),e.YNc(3,F,2,0,"span",17),e.qZA()),2&r){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",null==o.loginForm.controls.password.errors?null:o.loginForm.controls.password.errors.required),e.xp6(1),e.Q6J("ngIf",null==o.loginForm.controls.password.errors?null:o.loginForm.controls.password.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==o.loginForm.controls.password.errors?null:o.loginForm.controls.password.errors.maxlength)}}function y(r,s){1&r&&e._UZ(0,"i",21)}function C(r,s){1&r&&(e.TgZ(0,"span"),e._uU(1,"login"),e.qZA())}const q=function(r,s){return{"fa-eye":r,"fa-eye-slash":s}};function w(r){const s=r.get("password"),o=r.get("confirmpass");return s?.value!==o?.value&&s?.dirty&&o?.dirty?(o.setErrors({confirmErr:!0}),{formErr:!0}):null}function I(r,s){1&r&&(e.TgZ(0,"span"),e._uU(1,"your username required"),e.qZA())}function A(r,s){if(1&r&&(e.TgZ(0,"div",23),e.YNc(1,I,2,0,"span",20),e.qZA()),2&r){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",null==o.registerForm.controls.username.errors?null:o.registerForm.controls.username.errors.required)}}function L(r,s){1&r&&(e.TgZ(0,"span"),e._uU(1,"your email required"),e.qZA())}function b(r,s){1&r&&(e.TgZ(0,"span"),e._uU(1,"your email invaild"),e.qZA())}function N(r,s){if(1&r&&(e.TgZ(0,"div",23),e.YNc(1,L,2,0,"span",20),e.YNc(2,b,2,0,"span",20),e.qZA()),2&r){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",null==o.registerForm.controls.email.errors?null:o.registerForm.controls.email.errors.required),e.xp6(1),e.Q6J("ngIf",null==o.registerForm.controls.email.errors?null:o.registerForm.controls.email.errors.email)}}function U(r,s){1&r&&(e.TgZ(0,"span"),e._uU(1,"your confirmpass required"),e.qZA())}function Y(r,s){1&r&&(e.TgZ(0,"span"),e._uU(1,"your confirmpass is short"),e.qZA())}function Q(r,s){1&r&&(e.TgZ(0,"span"),e._uU(1,"your confirmpass is long"),e.qZA())}function k(r,s){1&r&&(e.TgZ(0,"span"),e._uU(1,"your confirmpass must be the same of password"),e.qZA())}function R(r,s){if(1&r&&(e.TgZ(0,"div",23),e.YNc(1,U,2,0,"span",20),e.YNc(2,Y,2,0,"span",20),e.YNc(3,Q,2,0,"span",20),e.YNc(4,k,2,0,"span",20),e.qZA()),2&r){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",null==o.registerForm.controls.confirmpass.errors?null:o.registerForm.controls.confirmpass.errors.required),e.xp6(1),e.Q6J("ngIf",null==o.registerForm.controls.confirmpass.errors?null:o.registerForm.controls.confirmpass.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==o.registerForm.controls.confirmpass.errors?null:o.registerForm.controls.confirmpass.errors.maxlength),e.xp6(1),e.Q6J("ngIf",null==o.registerForm.controls.confirmpass.errors?null:o.registerForm.controls.confirmpass.errors.confirmErr)}}function S(r,s){1&r&&e._UZ(0,"i",24)}function j(r,s){1&r&&(e.TgZ(0,"span"),e._uU(1,"Register"),e.qZA())}const f=function(r,s){return{"fa-eye":r,"fa-eye-slash":s}},B=[{path:"login",component:(()=>{class r{constructor(o,i,n,l){this._fb=o,this._auth=i,this._toasr=n,this._router=l,this.hide=!0,this.isLoading=!1,this.createForm()}changevalue(){this.hide=!this.hide}createForm(){this.loginForm=this._fb.group({email:["",[t.kI.required,t.kI.email]],password:["",[t.kI.required,t.kI.minLength(3),t.kI.maxLength(12)]],role:["user"]})}login(o){this.isLoading=!0,this._auth.login(o.value).subscribe({next:i=>{this.isLoading=!1,localStorage.setItem("token",i.token),this._toasr.success("login is success"),this._router.navigate(["/tasks"])},error:i=>{this.isLoading=!1}})}static#e=this.\u0275fac=function(i){return new(i||r)(e.Y36(t.qu),e.Y36(g),e.Y36(d._W),e.Y36(m.F0))};static#r=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-login"]],decls:24,vars:11,consts:[[1,"container"],[1,"row","d-flex","align-items-center"],[1,"col-md-6","position-relative","p-0"],[1,"over-lay"],["src","../../../../assets/image/888.jpg","alt","",1,"w-100","h-100"],[1,"col-md-6"],[1,"w-90","m-auto","rounded","shadow-lg","p-3","mb-5","bg-white"],[3,"formGroup","ngSubmit"],["for","email"],["type","text","id","email","formControlName","email",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["for","password"],[1,"position-relative"],["id","password","formControlName","password",1,"form-control",3,"type"],[1,"fas","position-absolute","top-50","end-0","translate-middle-y","me-2",3,"ngClass","click"],["type","submit",1,"btn","btn-success","d-block","mt-2","mx-auto","px-5",3,"disabled"],["class","fas fa-spinner fa-spin",4,"ngIf"],[4,"ngIf"],[1,"d-flex","justify-content-center","text-danger"],["routerLink","/auth/register",1,"text-danger"],[1,"alert","alert-danger"],[1,"fas","fa-spinner","fa-spin"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"div",3)(4,"img",4),e.qZA(),e.TgZ(5,"div",5)(6,"div",6)(7,"form",7),e.NdJ("ngSubmit",function(){return n.login(n.loginForm)}),e.TgZ(8,"label",8),e._uU(9,"Email"),e.qZA(),e._UZ(10,"input",9),e.YNc(11,Z,3,2,"div",10),e.TgZ(12,"label",11),e._uU(13,"Password"),e.qZA(),e.TgZ(14,"div",12),e._UZ(15,"input",13),e.TgZ(16,"i",14),e.NdJ("click",function(){return n.changevalue()}),e.qZA()(),e.YNc(17,x,4,3,"div",10),e.TgZ(18,"button",15),e.YNc(19,y,1,0,"i",16),e.YNc(20,C,2,0,"span",17),e.qZA(),e.TgZ(21,"div",18)(22,"a",19),e._uU(23,"Create Account!"),e.qZA()()()()()()()),2&i&&(e.xp6(7),e.Q6J("formGroup",n.loginForm),e.xp6(4),e.Q6J("ngIf",n.loginForm.controls.email.touched&&n.loginForm.controls.email.errors),e.xp6(4),e.Q6J("type",n.hide?"password":"type"),e.xp6(1),e.Q6J("ngClass",e.WLB(8,q,n.hide,!n.hide)),e.xp6(1),e.Q6J("ngIf",n.loginForm.controls.password.touched&&n.loginForm.controls.password.errors),e.xp6(1),e.Q6J("disabled",n.loginForm.invalid),e.xp6(1),e.Q6J("ngIf",n.isLoading),e.xp6(1),e.Q6J("ngIf",!n.isLoading))},dependencies:[p.mk,p.O5,m.rH,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u]})}return r})()},{path:"register",component:(()=>{class r{constructor(o,i,n,l){this._fb=o,this._auth=i,this._toastr=n,this._route=l,this.registerForm=new t.cw({}),this.isLoading=!1,this.hide=!0,this.hiderepass=!0,this.creatForm()}changevalue(){this.hide=!this.hide}changevalue2(){this.hiderepass=!this.hiderepass}creatForm(){this.registerForm=this._fb.group({email:["",[t.kI.required,t.kI.email]],password:["",[t.kI.required,t.kI.minLength(3),t.kI.maxLength(12)]],confirmpass:["",[t.kI.required,t.kI.minLength(3),t.kI.maxLength(12)]],username:["",[t.kI.required]]},{validators:w})}register(o){const i={email:o.get("email")?.value,password:o.get("password")?.value,username:o.get("username")?.value,role:"user"};this.isLoading=!0,this._auth.register(i).subscribe({next:n=>{this.isLoading=!1,this._toastr.success("register is success"),this._route.navigate(["/auth/login"])},error:n=>{this.isLoading=!1}})}static#e=this.\u0275fac=function(i){return new(i||r)(e.Y36(t.qu),e.Y36(g),e.Y36(d._W),e.Y36(m.F0))};static#r=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-register"]],decls:33,vars:17,consts:[[1,"container"],[1,"row","d-flex","align-items-center"],[1,"col-md-6","position-relative","p-0"],[1,"over-lay"],["src","../../../../assets/image/888.jpg","alt","",1,"w-100","h-100"],[1,"col-md-6"],[1,"w-90","m-auto","rounded","shadow-lg","p-3","mb-5","bg-white"],[3,"formGroup","ngSubmit"],["for","email"],["type","text","id","username","formControlName","username",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["type","text","id","email","formControlName","email",1,"form-control"],["for","password"],[1,"position-relative"],["id","password","formControlName","password",1,"form-control",3,"type"],[1,"fas","position-absolute","top-50","end-0","translate-middle-y","me-2",3,"ngClass","click"],["for","confirm"],["id","confirm","formControlName","confirmpass",1,"form-control",3,"type"],["type","submit",1,"btn","btn-success","d-block","mt-2","mx-auto","px-5",3,"disabled"],["class","fas fa-spinner fa-spin",4,"ngIf"],[4,"ngIf"],[1,"d-flex","justify-content-center","text-danger"],["routerLink","/auth/login",1,"text-danger"],[1,"alert","alert-danger"],[1,"fas","fa-spinner","fa-spin"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"div",3)(4,"img",4),e.qZA(),e.TgZ(5,"div",5)(6,"div",6)(7,"form",7),e.NdJ("ngSubmit",function(){return n.register(n.registerForm)}),e.TgZ(8,"label",8),e._uU(9,"UserName"),e.qZA(),e._UZ(10,"input",9),e.YNc(11,A,2,1,"div",10),e.TgZ(12,"label",8),e._uU(13,"Email"),e.qZA(),e._UZ(14,"input",11),e.YNc(15,N,3,2,"div",10),e.TgZ(16,"label",12),e._uU(17,"Password"),e.qZA(),e.TgZ(18,"div",13),e._UZ(19,"input",14),e.TgZ(20,"i",15),e.NdJ("click",function(){return n.changevalue()}),e.qZA()(),e.TgZ(21,"label",16),e._uU(22,"Confirm Password"),e.qZA(),e.TgZ(23,"div",13),e._UZ(24,"input",17),e.TgZ(25,"i",15),e.NdJ("click",function(){return n.changevalue2()}),e.qZA()(),e.YNc(26,R,5,4,"div",10),e.TgZ(27,"button",18),e.YNc(28,S,1,0,"i",19),e.YNc(29,j,2,0,"span",20),e.qZA(),e.TgZ(30,"div",21)(31,"a",22),e._uU(32,"Have Account!"),e.qZA()()()()()()()),2&i&&(e.xp6(7),e.Q6J("formGroup",n.registerForm),e.xp6(4),e.Q6J("ngIf",n.registerForm.controls.username.touched&&n.registerForm.controls.username.errors),e.xp6(4),e.Q6J("ngIf",n.registerForm.controls.email.touched&&n.registerForm.controls.email.errors),e.xp6(4),e.Q6J("type",n.hide?"password":"type"),e.xp6(1),e.Q6J("ngClass",e.WLB(11,f,n.hide,!n.hide)),e.xp6(4),e.Q6J("type",n.hiderepass?"password":"type"),e.xp6(1),e.Q6J("ngClass",e.WLB(14,f,n.hiderepass,!n.hiderepass)),e.xp6(1),e.Q6J("ngIf",n.registerForm.controls.confirmpass.touched&&n.registerForm.controls.confirmpass.errors),e.xp6(1),e.Q6J("disabled",n.registerForm.invalid),e.xp6(1),e.Q6J("ngIf",n.isLoading),e.xp6(1),e.Q6J("ngIf",!n.isLoading))},dependencies:[p.mk,p.O5,m.rH,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u]})}return r})()}];let E=(()=>{class r{static#e=this.\u0275fac=function(i){return new(i||r)};static#r=this.\u0275mod=e.oAB({type:r});static#o=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(B),m.Bz]})}return r})(),G=(()=>{class r{static#e=this.\u0275fac=function(i){return new(i||r)};static#r=this.\u0275mod=e.oAB({type:r});static#o=this.\u0275inj=e.cJS({imports:[p.ez,E,t.UX,t.u5,u.JF]})}return r})()}}]);