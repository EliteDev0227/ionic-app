import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SidemenuPage } from './sidemenu';

@NgModule({
  declarations: [
    SidemenuPage,
  ],
  imports: [
    IonicPageModule.forChild(SidemenuPage),
  ],
})
export class SidemenuPageModule {}
