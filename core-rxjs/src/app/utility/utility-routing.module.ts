import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilityLayoutComponent } from './utility-layout/utility-layout.component';

const routes: Routes = [
  { path: "", component: UtilityLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilityRoutingModule { }
