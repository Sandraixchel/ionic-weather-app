import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaliPageRoutingModule } from './bali-routing.module';

import { BaliPage } from './bali.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaliPageRoutingModule
  ],
  declarations: [BaliPage]
})
export class BaliPageModule {}
