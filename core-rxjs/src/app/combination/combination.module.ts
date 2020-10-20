import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombinationRoutingModule } from './combination-routing.module';
import { CombinationLayoutComponent } from './combination-layout/combination-layout.component';
import { MargeComponent } from './marge/marge.component';


@NgModule({
  declarations: [CombinationLayoutComponent, MargeComponent,],
  imports: [
    CommonModule,
    CombinationRoutingModule,
  ]
})
export class CombinationModule { }
