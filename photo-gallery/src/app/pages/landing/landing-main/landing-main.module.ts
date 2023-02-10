import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingMainPageRoutingModule } from './landing-main-routing.module';

import { LandingMainPage } from './landing-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingMainPageRoutingModule
  ],
  declarations: [LandingMainPage]
})
export class LandingMainPageModule {}
