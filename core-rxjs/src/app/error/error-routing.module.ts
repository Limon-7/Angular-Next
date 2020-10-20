import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorLayoutComponent } from './error-layout/error-layout.component';

const routes: Routes = [
  { path: "", component: ErrorLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
