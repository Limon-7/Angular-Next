import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const httpCoreModule = () => import("./http-core/http-core.module").then(x => x.HttpCoreModule);
const songsModule = () => import("./songs/songs.module").then(x => x.SongsModule);
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "http", loadChildren: httpCoreModule },
  { path: "songs", loadChildren: songsModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
