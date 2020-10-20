import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { UserSidenavComponent } from './user-sidenav/user-sidenav.component';

const routes: Routes = [
  {path:"",component:UserSidenavComponent,outlet:"user_nav"}
  ,{
    path:"", component:LayoutComponent,children:[
    {path:"profile", component:ProfileComponent},
    {path:"orders", component:OrdersComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
