import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondaryHeaderPageRoutingModule } from './secondary-header-routing.module';

import { SecondaryHeaderPage } from './secondary-header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondaryHeaderPageRoutingModule
  ],
  exports: [SecondaryHeaderPage],
  declarations: [SecondaryHeaderPage]
})
export class SecondaryHeaderPageModule {}
