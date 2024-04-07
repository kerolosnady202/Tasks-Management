import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _httpclient:HttpClient) { }

  getAllTasks(filter:any):Observable<any>{
    let params=new HttpParams()
    Object.entries(filter).forEach(([key,value]:any)=>{
      if (value) {
        params=params.append(key,value)
      }
    })
   /* let headers=new HttpHeaders()
   headers=headers.append('Authorization','Bearer ' + localStorage.getItem('token')) */
   return this._httpclient.get('https://crud-27v6.onrender.com/tasks/all-tasks',{params})
  }
  createTask(task:any):Observable<any>{
    return this._httpclient.post('https://crud-27v6.onrender.com/tasks/add-task',task)
  }
  UpdataTask(task:any,id:any):Observable<any>{
    return this._httpclient.put(`https://crud-27v6.onrender.com/tasks/edit-task/${id}`,task)
  }
  deleteTask(id:any):Observable<any>{
    return this._httpclient.delete(`https://crud-27v6.onrender.com/tasks/delete-task/${id}`)
  }
}
