import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { FpwdPageRoutingModule } from './fpwd-routing.module';

import { FpwdPage } from './fpwd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    FpwdPageRoutingModule
  ],
  declarations: [FpwdPage]
})
export class FpwdPageModule {}
