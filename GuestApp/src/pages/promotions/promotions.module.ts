import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromotionsPage } from './promotions';

@NgModule({
  declarations: [
    PromotionsPage,
  ],
  imports: [
    IonicPageModule.forChild(PromotionsPage),
  ],
})
export class PromotionsPageModule {}
