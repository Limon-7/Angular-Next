import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreationLayoutComponent } from './creation-layout/creation-layout.component';
import { FormEventComponent } from './form-event/form-event.component';

const routes: Routes = [
  {
    path: "", component: CreationLayoutComponent, children: [
      { path: "form-event", component: FormEventComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreationRoutingModule { }
