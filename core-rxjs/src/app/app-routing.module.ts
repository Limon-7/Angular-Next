import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const creationModule = () => import("./creation/creation.module").then(x => x.CreationModule);
const combinationModule = () => import("./combination/combination.module").then(x => x.CombinationModule);
const filteringModule = () => import("./filtering/filtering.module").then(x => x.FilteringModule);
const transformationModule = () => import("./transformation/transformation.module").then(x => x.TransformationModule);
const utilityModule = () => import("./utility/utility.module").then(x => x.UtilityModule);
const subjectModule = () => import("./subject/subject.module").then(x => x.SubjectModule);
const errorModule = () => import("./error/error.module").then(x => x.ErrorModule);



const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "creation", loadChildren: creationModule },
  { path: "transformation", loadChildren: transformationModule },
  { path: "combination", loadChildren: combinationModule },
  { path: "filtering", loadChildren: filteringModule },
  { path: "utility", loadChildren: utilityModule },
  { path: "subject", loadChildren: subjectModule },
  { path: "error", loadChildren: errorModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
