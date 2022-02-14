import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FpwdPage } from './fpwd.page';

const routes: Routes = [
  {
    path: '',
    component: FpwdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FpwdPageRoutingModule {}
