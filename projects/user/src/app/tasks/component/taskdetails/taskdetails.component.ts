import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../service/task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.scss']
})
export class TaskdetailsComponent {
  id:any
  taskDetail:any
  constructor(
    private _activeRoute:ActivatedRoute ,
    private _taskSer:TaskService,
    private _toastr:ToastrService
  ){

  }
  ngOnInit(): void {
    this._activeRoute.params.subscribe({
      next:(parmas:any)=>{
        this.id=parmas.id
      }
    })
   this.taskDetails(this.id)
  }
  taskDetails(taskId:string){
    this._taskSer.taskDetails(taskId).subscribe({
      next:(res)=>{
        console.log(res.tasks)
       this.taskDetail=res.tasks
      }
    })
  }
  complete(){
    this._taskSer.complete(this.id).subscribe({
      next:(res)=>{
        this._toastr.success(res.massage)
        console.log(res)
        this.taskDetails(this.id)
      },
      error:(err)=>{console.log(err)}
    })
  }

}
