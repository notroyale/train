import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimaryHeaderComponent } from './primary-header.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [PrimaryHeaderComponent],
  exports: [PrimaryHeaderComponent]
})
export class PrimaryHeaderComponentModule {}
