import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneinfoPage } from './phoneinfo';

@NgModule({
  declarations: [
    PhoneinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneinfoPage),
  ],
})
export class PhoneinfoPageModule {}
