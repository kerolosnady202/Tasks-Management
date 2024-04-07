import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllusersComponent } from './component/allusers/allusers.component';

const routes: Routes = [
  {path:'',component:AllusersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
