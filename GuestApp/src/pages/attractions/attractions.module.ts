import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttractionsPage } from './attractions';

@NgModule({
  declarations: [
    AttractionsPage,
  ],
  imports: [
    IonicPageModule.forChild(AttractionsPage),
  ],
})
export class AttractionsPageModule {}
