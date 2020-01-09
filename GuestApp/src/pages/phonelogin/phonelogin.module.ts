import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneloginPage } from './phonelogin';

@NgModule({
  declarations: [
    PhoneloginPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneloginPage),
  ],
})
export class PhoneloginPageModule {}
