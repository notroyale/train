import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondaryHeaderPage } from './secondary-header.page';

const routes: Routes = [
  {
    path: '',
    component: SecondaryHeaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondaryHeaderPageRoutingModule {}
