import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../service/tasks.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ComfirmationComponent } from '../comfirmation/comfirmation.component';
import { UserserviceService } from '../../../users/service/userservice.service';

@Component({
  selector: 'app-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrls: ['./addtasks.component.scss']
})
export class AddtasksComponent {
  constructor(
    @Inject (MAT_DIALOG_DATA) public data:any,
    private _FB:FormBuilder ,
    private _taskser:TasksService ,
    private _toastr:ToastrService,
    private _spiner:NgxSpinnerService,
    private _dialog:MatDialog,
    private _dialogRef:MatDialogRef<AddtasksComponent>,
     private _user:UserserviceService,
    ){
      this.getUserFromSub()
    }
  shouldFocus: boolean = false;
  FormAdd:FormGroup=new FormGroup({})
  ngOnInit(): void {
   this.crateForm()
   console.log(this.data)
   this.getAllUser()
  }
  userss:any = [
    {name:"Moahmed" , id:'6602d646d58706a3af83c51f'},
    {name:"Ahmed" , id:'6602d6a0d58706a3af83c522'},
    {name:"Zain" , id:'6602d6c1d58706a3af83c525'},
    {name:"keroloes" , id:'660c72650ff450b9605cc49a'},
    {name:"walid" , id:'660fe82d82fb48432d3c4a83'},
  ]
  users:any[]=[]
  selectImagevalue:string=''
  oldFormValue:any
  getAllUser(){
   this._user.getAllUsers()
  }
  getUserFromSub(){
    this._user.userData.subscribe({
      next:(res:any)=>{
       /*  this.users=this.mapData(res.data) */
        this.users=res.data
      }
    })
  }
 /*  mapData(data:any[]){
    let newdata= data?.map((item)=>{
      return {
        username:item?.username,
        _id:item?._id
      }
    })
    return newdata
  } */
  crateForm(){
    this.FormAdd=this._FB.group({
      title:[ this.data?.title||'',[Validators.required,Validators.minLength(5) ]],
      userId:[this.data?.userId?._id||'',[Validators.required ]],
      image:[this.data?.image || '',[Validators.required ]],
      description:[  this.data?.description||'',[Validators.required ]],
      deadline:[this.data?.deadline ||'',[Validators.required ]],
    })
    this.oldFormValue =this.FormAdd.value /* insert initial value of form */
}
close(){
  let haschanged=false
   Object.keys(this.oldFormValue).forEach((key)=>{
    if (this.oldFormValue[key] !== this.FormAdd.value[key]) /* compare initial value with value after click close button */{
      haschanged=true
    }
   })
   if (haschanged) {
    const dialogRef = this._dialog.open(ComfirmationComponent, {
      width:'500px',
      /* disableClose: true */
    });
   }else{
    this._dialogRef.close()
   }
}
selectImage(event:any){
  this.selectImagevalue=event.target.value
  this.FormAdd.get('image')?.patchValue(event.target.files[0])
}
addTask(){
  let model=this.prepereFormData()
  this._taskser.createTask(model).subscribe({
    next:(res)=>{
      this._dialogRef.close(true) /* ture to recall getAllTasks method again */
      this._toastr.success(res.massage)
    }/* ,
    error:(err)=>{
      this._toastr.error(err.error.message)
    } */
   })
}
updataTask(){
  let model=this.prepereFormData()
  this._taskser.UpdataTask(model,this.data._id).subscribe({
    next:(res)=>{
      this._dialogRef.close(true) /* ture to recall getAllTasks method again */
      this._toastr.success(res.massage)
    }/* ,
    error:(err)=>{
      this._toastr.error(err.error.message)
    } */
   })

}

prepereFormData(){
  let newValue=moment(this.FormAdd.value['deadline']).format('YYYY-MM-DD')
  this.FormAdd.get('deadline')?.patchValue(newValue)
  let formData=new FormData()
  Object.entries(this.FormAdd.value).forEach(([key,value]:any)=>{
    formData.append(key , value)
  })
  return formData
}
}
