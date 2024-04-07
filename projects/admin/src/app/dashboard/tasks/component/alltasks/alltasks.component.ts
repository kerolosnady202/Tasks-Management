import { Task } from './../../interface/task';
import { AddtasksComponent } from './../addtasks/addtasks.component';
import { FormGroup } from '@angular/forms';
import { TasksService } from './../../service/tasks.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';
import { UserserviceService } from '../../../users/service/userservice.service';

@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.scss']
})
export class AlltasksComponent {
  displayedColumns: string[] = ['no','image', 'title', 'user' ,'deadLineDate','status', 'actions'];
  dataSource:any = [];
 /*  dataSource= new BehaviorSubject([null]); */
  tasksFilter!:FormGroup
  page:any=1
  total:any
/*   users:any = [
    {name:"Moahmed" , id:'6602d646d58706a3af83c51f'},
    {name:"Ahmed" , id:'6602d6a0d58706a3af83c522'},
    {name:"Zain" , id:'6602d6c1d58706a3af83c525'},
    {name:"Zain" , id:'6602d6c1d58706a3af83c525'},
  ] */

  users:any[]=[]
  status:any = [
    {name:"Complete"},
    {name:"In-Progress" },
  ]
  constructor(private _taskServiec:TasksService ,
    public dialog: MatDialog,
    private _toastr:ToastrService,
    private _userservice:UserserviceService
    ){
      this.getDtaFromsubject()
    }
  ngOnInit(): void {
    this.getAllTasks()
    this.getUser()
  }
  getUser(){
    this._userservice.getAllUsers()
  }
  getDtaFromsubject(){
    this._userservice.userData.subscribe({
      next:(res:any)=>{
        this.users=res.data
        console.log(this.users)

      }
    })
  }
  /* start pagination */
  changePage(event:any){
    this.page=event
    this.fiilteration['page']=event
    this.getAllTasks()
  }
  /* end pagination */
  /* start  filteration */
  fiilteration:any={
    page:this.page,
    limit:5
  }
  setid:any
  seach(event:any){
    this.fiilteration['page']=1
    this.fiilteration['keyword']=event.value
    clearTimeout(this.setid)
    this.setid=setTimeout(() => {
      this.getAllTasks()
    }, 1000);
  }
  changeUser(event:any){
    this.fiilteration['page']=1
    this.fiilteration['userId']=event.value
    this.getAllTasks()
  }
  changeStatus(event:any){
    this.fiilteration['page']=1
    this.fiilteration['status']=event.value
    this.getAllTasks()
  }
  changedata(event:any , type:string){
    this.fiilteration['page']=1
    this.fiilteration[type]=moment(event.value).format('YYYY-MM-DD')
    if (type == 'toDate' && this.fiilteration['toDate'] !=='Invalid date') {
      this.getAllTasks()
    }
  }
  /* end  filteration */

 /*  createform() {
    this.tasksFilter = this.fb.group({
      title:[''],
      userId:[''],
      fromDate:[''],
      toDate:['']
    })
  } */

  getAllTasks(){
    this._taskServiec.getAllTasks(this.fiilteration).subscribe({
      next:(res)=>{
        this.dataSource=this.mapData(res.tasks)
        this.total=res.totalItems
        console.log(this.dataSource)
      }/* ,
      error:(err)=>{
        this._toastr.error(err.error.message)
      } */

    })
  }
  mapData(data:any[]){
    let newData = data.map((item)=>{
      return{
        ...item,
        username:item?.userId?.username
      }
    })
    return newData
  }
  addTask(){
      const dialogRef = this.dialog.open(AddtasksComponent, {
        width:'500px',
        maxHeight: '90vh',
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result == true) {/* i check to know the user click in create or close */
         this.getAllTasks()/* if result equel true that mean the user click in create and recall getAllTasks methed to get new tasks*/
        }
      });
    }
    updataTask(element:any){
      const dialogRef = this.dialog.open(AddtasksComponent, {
        width:'500px',
        maxHeight: '90vh',
        disableClose: true,
        data:element
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result == true) {/* i check to know the user click in create or close */
         this.getAllTasks()/* if result equel true that mean the user click in create and recall getAllTasks methed to get new tasks*/
        }
      });
    }
    deleteTask(id:any){
      this._taskServiec.deleteTask(id).subscribe({
        next:(res)=>
        {
         this._toastr.success(res.massage)
         this.getAllTasks()
        }/* ,
        error:(err)=>{

          console.log(err)
        } */
      })
    }

  }


