import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombinationLayoutComponent } from './combination-layout/combination-layout.component';
import { MargeComponent } from './marge/marge.component';

const routes: Routes = [
  {
    path: "", component: CombinationLayoutComponent, children: [
      { path: "merge", component: MargeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombinationRoutingModule { }
