import { SharedModule } from './../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { TasksRoutingModule } from './tasks-routing.module';
import { AlltasksComponent } from './component/alltasks/alltasks.component';
import { AddtasksComponent } from './component/addtasks/addtasks.component';
import { MaterialModule } from '../../material/material.module';
import { ComfirmationComponent } from './component/comfirmation/comfirmation.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AlltasksComponent,
    AddtasksComponent,
    ComfirmationComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    SharedModule,
  ]
})
export class TasksModule { }
