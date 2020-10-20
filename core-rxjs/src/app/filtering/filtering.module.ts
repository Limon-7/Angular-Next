import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilteringRoutingModule } from './filtering-routing.module';
import { FilteringLayoutComponent } from './filtering-layout/filtering-layout.component';


@NgModule({
  declarations: [FilteringLayoutComponent],
  imports: [
    CommonModule,
    FilteringRoutingModule
  ]
})
export class FilteringModule { }
