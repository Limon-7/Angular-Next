import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransformationLayoutComponent } from './transformation-layout/transformation-layout.component';

const routes: Routes = [
  { path: "", component: TransformationLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransformationRoutingModule { }
