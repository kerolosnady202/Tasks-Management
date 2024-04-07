import { Task } from './../../../../../../admin/src/app/dashboard/tasks/interface/task';
import { Component } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { TaskService } from '../../service/task.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent {
  allUserTask:any
  userData:any
  page:number=1
  totalTask:number=0
  selectstatus:string="In-Progress" /* required in database */
  check:boolean=true
  changePage(event:any){
    this.page=event
    this.getAllTasks()
  }
  constructor(
    private _taskssSer:TaskService,
    private _toastr:ToastrService
  ){

  }
  ngOnInit(): void {
    this.getUserData()
    this.getAllTasks()
  }
  getUserData(){
    let token=JSON.stringify(localStorage.getItem('token'))
    /*  this.userData=window.atob(token) */
    this.userData=jwtDecode(token)
     console.log(this.userData.userId)
  }
  getAllTasks(){
    let params={
      page:this.page,
     /*  limit:4, */
      status:this.selectstatus
    }
     this._taskssSer.getUserTasks(this.userData.userId , params).subscribe({
      next:(res)=>{
        this.allUserTask=res.tasks
        console.log(res)
        this.totalTask=res.tasks.length
        this.check=false
      },
      error:(err)=>{
        this.allUserTask=[] /* to make array empty because if res is empty the backend reture error not return empty array */
        this.check=true
      }
     })
  }

  complete(_id:string){
    this._taskssSer.complete(_id).subscribe({
      next:(res)=>{
        this._toastr.success(res.massage)
        console.log(res)
        this.getAllTasks()
      },
      error:(err)=>{console.log(err)}
    })

  }
}
