import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingMainPage } from './landing-main.page';

const routes: Routes = [
  {
    path: '',
    component: LandingMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class LandingMainPageRoutingModule {}
