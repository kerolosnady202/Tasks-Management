import { LayoutComponent } from './layout/layout.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './tasks/guard/auth.guard';

const routes: Routes = [
  {path:'',component:LayoutComponent,canActivate:[authGuard],
children:[
    {path:'tasks',loadChildren:()=>import('./tasks/tasks.module').then(m=>m.TasksModule)},
  ]},
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
