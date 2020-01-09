import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneauthPage } from './phoneauth';

@NgModule({
  declarations: [
    PhoneauthPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneauthPage),
  ],
})
export class PhoneauthPageModule {}
