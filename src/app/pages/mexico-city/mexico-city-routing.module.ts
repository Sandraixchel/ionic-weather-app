import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MexicoCityPage } from './mexico-city.page';

const routes: Routes = [
  {
    path: '',
    component: MexicoCityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MexicoCityPageRoutingModule {}
