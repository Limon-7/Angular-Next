import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersModule } from './users/users.module';
const adminModule=()=>import("./admin/admin.module").then(x=>x.AdminModule);
const usersModule=()=>import("./users/users.module").then(x=>UsersModule);
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"admin",loadChildren:adminModule},
  {path:"users",loadChildren:usersModule},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
