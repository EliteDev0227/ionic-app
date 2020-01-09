import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubmapPage } from './submap';

@NgModule({
  declarations: [
    SubmapPage,
  ],
  imports: [
    IonicPageModule.forChild(SubmapPage),
  ],
})
export class SubmapPageModule {}
