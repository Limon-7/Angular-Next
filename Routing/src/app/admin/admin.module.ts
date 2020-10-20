import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [LayoutComponent, SidenavComponent, ProductsComponent, OrdersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
