import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { ListTasksComponent } from './component/list-tasks/list-tasks.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TaskdetailsComponent } from './component/taskdetails/taskdetails.component';


@NgModule({
  declarations: [
    ListTasksComponent,
    TaskdetailsComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    NgxPaginationModule
  ]
})
export class TasksModule { }
