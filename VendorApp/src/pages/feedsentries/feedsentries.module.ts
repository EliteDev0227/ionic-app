import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedsentriesPage } from './feedsentries';

@NgModule({
  declarations: [
    FeedsentriesPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedsentriesPage),
  ],
})
export class FeedsentriesPageModule {}
