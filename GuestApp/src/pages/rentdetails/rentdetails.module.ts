import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RentdetailsPage } from './rentdetails';

@NgModule({
  declarations: [
    RentdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RentdetailsPage),
  ],
})
export class RentdetailsPageModule {}
