import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http:HttpClient) { }

  getUserTasks(userId:string, tasksparams:any):Observable<any>{
    let params=new HttpParams()
    Object.entries(tasksparams).forEach(([key,value]:any)=>{
      params=params.append(key , value)
    } )

    return this._http.get(`https://crud-27v6.onrender.com/tasks/user-tasks/${userId}`,{params})

  }
  complete(idTask:string):Observable<any>{
    let taskId={
      id:idTask
    }
   return this._http.put('https://crud-27v6.onrender.com/tasks/complete',taskId)
  }
  taskDetails(id:string):Observable<any>{
    return this._http.get(`https://crud-27v6.onrender.com/tasks/task/${id}`)
  }
}
