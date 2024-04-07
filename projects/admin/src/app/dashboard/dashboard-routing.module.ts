import { WelcomeComponent } from './welcome/welcome.component';
import { authGuard } from './../core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,canActivate:[authGuard],
  children:[
    {path:'',component:WelcomeComponent},
    {path:'tasks',loadChildren:()=>import('./tasks/tasks.module').then((m)=>m.TasksModule)},
    {path:'users',loadChildren:()=>import('./users/users.module').then((m)=>m.UsersModule)},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
