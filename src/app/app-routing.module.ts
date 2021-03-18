import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AppPageComponent } from "./app-page/app-page.component";

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "app/:id", component: AppPageComponent },
  // { path: "", component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
