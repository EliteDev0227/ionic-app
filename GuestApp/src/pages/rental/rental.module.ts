import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentalPage } from './rental';

@NgModule({
  declarations: [
    RentalPage,
  ],
  imports: [
    IonicPageModule.forChild(RentalPage),
  ],
})
export class RentalPageModule {}
