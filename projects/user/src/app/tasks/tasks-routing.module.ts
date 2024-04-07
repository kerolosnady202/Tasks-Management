import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from './component/list-tasks/list-tasks.component';
import { TaskdetailsComponent } from './component/taskdetails/taskdetails.component';

const routes: Routes = [
  {path:'',component:ListTasksComponent},
  {path:':id',component:TaskdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
