import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilityRoutingModule } from './utility-routing.module';
import { UtilityLayoutComponent } from './utility-layout/utility-layout.component';


@NgModule({
  declarations: [UtilityLayoutComponent],
  imports: [
    CommonModule,
    UtilityRoutingModule
  ]
})
export class UtilityModule { }
