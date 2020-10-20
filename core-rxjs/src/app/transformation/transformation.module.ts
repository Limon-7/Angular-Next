import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransformationRoutingModule } from './transformation-routing.module';
import { TransformationLayoutComponent } from './transformation-layout/transformation-layout.component';


@NgModule({
  declarations: [TransformationLayoutComponent],
  imports: [
    CommonModule,
    TransformationRoutingModule
  ]
})
export class TransformationModule { }
