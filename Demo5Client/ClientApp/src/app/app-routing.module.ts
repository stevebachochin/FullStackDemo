import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewpgComponent } from "./components/viewpg/viewpg.component";
import { FormpgComponent } from "./components/formpg/formpg.component";

const routes: Routes = [
  {
    path: "",
    component: ViewpgComponent
  },
  {
    path: "quotes",
    component: ViewpgComponent
  },
  {
    path: 'quote/:id',
    component: FormpgComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
