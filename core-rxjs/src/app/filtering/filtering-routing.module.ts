import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilteringLayoutComponent } from './filtering-layout/filtering-layout.component';

const routes: Routes = [
  { path: "", component: FilteringLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilteringRoutingModule { }
