import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreationRoutingModule } from './creation-routing.module';
import { CreationLayoutComponent } from './creation-layout/creation-layout.component';
import { FormEventComponent } from './form-event/form-event.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CreationLayoutComponent, FormEventComponent],
  imports: [
    CommonModule,
    CreationRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class CreationModule { }
