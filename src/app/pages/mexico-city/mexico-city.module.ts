import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MexicoCityPageRoutingModule } from './mexico-city-routing.module';

import { MexicoCityPage } from './mexico-city.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MexicoCityPageRoutingModule
  ],
  declarations: [MexicoCityPage]
})
export class MexicoCityPageModule {}
