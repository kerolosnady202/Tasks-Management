import { Component } from '@angular/core';
import { UserserviceService } from '../../service/userservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss']
})
export class AllusersComponent {
  displayedColumns: string[] = ['position', 'username', 'email', 'assignedTasks','status' , 'action'];
  dataSource:any = [];
  p:number=1
  total:number=0
  changePage(event:any){
    this.p=event
    this.model['page']=event
    this.getAllUser()
  }
   model={
    page:this.p,
    limit:7,
    name:''
  }
  constructor(
    private _user:UserserviceService,
    private _toastr:ToastrService,
  ){
    this.getDataFromSub()
  }
  ngOnInit(): void {
    this.getAllUser()
  }
  setId:any
  seach(event:any){
    this.model['name']=event.value
    clearTimeout(this.setId)
    this.setId=setTimeout(() => {
      this.getAllUser()
    }, 1000);
  }
  getAllUser(){
    this._user.getAllUsers(this.model)
  }
  getDataFromSub(){
    this._user.userData.subscribe({
      next:(res:any)=>{
        this.dataSource=res.data,
        this.total=res.total
      }
      })
  }
  deleteUser(userId:string , index:number){
    if (this.dataSource[index].assignedTasks > 0) {
       this._toastr.error('you can not delete this user until complete his tasks')
    }else{
      this._user.deleteUser(userId).subscribe({
        next:(res)=>{
          /* console.log(res) */
          this._toastr.success(res.massage)
          this.getAllUser()
        }
       })
    }

  }
  chagestatus(userId:string , userStatus:string , index:number){
    if (this.dataSource[index].assignedTasks > 0) {
      this._toastr.error('you can not change status of  this user until complete his tasks')
   }else{
    let model={
      id:userId,
      status:userStatus
    }
   this._user.changestatus(model).subscribe({
    next:(res:any)=>{
      this._toastr.success(res.massage)
      this.getAllUser()
    }
   })
   }

  }


}
