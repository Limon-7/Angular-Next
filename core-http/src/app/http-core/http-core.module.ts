import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpCoreRoutingModule } from './http-core-routing.module';
import { CoreHttpComponent } from './core-http/core-http.component';
import { CoreObservableComponent } from './core-observable/core-observable.component';
import { CorePromiseComponent } from './core-promise/core-promise.component';
import { JsnopPromiseComponent } from './jsnop-promise/jsnop-promise.component';
import { JsnopObservableComponent } from './jsnop-observable/jsnop-observable.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CoreHttpComponent, CoreObservableComponent, CorePromiseComponent, JsnopPromiseComponent, JsnopObservableComponent, LayoutComponent],
  imports: [
    CommonModule,
    HttpCoreRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ], exports: [
    CoreHttpComponent, CoreObservableComponent, CorePromiseComponent, JsnopPromiseComponent, JsnopObservableComponent
  ]
})
export class HttpCoreModule { }
