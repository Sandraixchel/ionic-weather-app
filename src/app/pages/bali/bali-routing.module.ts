import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaliPage } from './bali.page';

const routes: Routes = [
  {
    path: '',
    component: BaliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaliPageRoutingModule {}
