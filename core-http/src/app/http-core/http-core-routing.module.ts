import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreHttpComponent } from './core-http/core-http.component';
import { CoreObservableComponent } from './core-observable/core-observable.component';
import { CorePromiseComponent } from './core-promise/core-promise.component';
import { JsnopObservableComponent } from './jsnop-observable/jsnop-observable.component';
import { JsnopPromiseComponent } from './jsnop-promise/jsnop-promise.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: "", component: LayoutComponent, children: [
      { path: "", component: CoreHttpComponent },
      {
        path: "observable", component: CoreObservableComponent
      },
      {
        path: "observable/:term", component: CoreObservableComponent
      },
      { path: "observable/jsonp", component: JsnopObservableComponent },

      {
        path: "promise", component: CorePromiseComponent

      },
      {
        path: "promise/:term", component: CorePromiseComponent

      },
      { path: "promise/jsonp", component: JsnopPromiseComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpCoreRoutingModule { }
