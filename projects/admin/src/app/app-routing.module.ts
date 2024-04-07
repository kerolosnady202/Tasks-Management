
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)},
  {path:'login',loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
