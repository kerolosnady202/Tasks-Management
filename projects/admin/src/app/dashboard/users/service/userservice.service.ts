import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export interface ChangeStatus{
  id:string,
  status:string
}

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
   userData=new BehaviorSubject({})
  constructor(
    private _http:HttpClient,
  ) { }
  getAllUserFromDatabase(model:any):Observable<any>{
    let params=new HttpParams();
   if (model) {
    Object.entries(model).forEach(([key,value]:any)=>{
      if (value) {
       params=params.append(key , value)
      }
     })
   }
   return this._http.get('https://crud-27v6.onrender.com/auth/users',{params})

  }
  deleteUser(id:any):Observable<any>{
    return this._http.delete(`https://crud-27v6.onrender.com/auth/user/${id}`)
  }
  changestatus(model:ChangeStatus){
    return this._http.put(`https://crud-27v6.onrender.com/auth/user-status`,model)
  }
  getAllUsers(model?:any){
    this.getAllUserFromDatabase(model).subscribe({
      next:(res)=>{
        this.userData.next({
          data:res.users,
          total:res.totalItems
        })
      }
    })
  }
}
