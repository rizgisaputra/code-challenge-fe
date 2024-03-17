import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path : 'home',
    component : AppComponent
  },
  {
    path : '**',
    redirectTo : 'home'
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}


