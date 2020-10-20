import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { LayoutComponent } from './layout/layout.component';
import { UserSidenavComponent } from './user-sidenav/user-sidenav.component';


@NgModule({
  declarations: [OrdersComponent, ProfileComponent, LayoutComponent, UserSidenavComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
