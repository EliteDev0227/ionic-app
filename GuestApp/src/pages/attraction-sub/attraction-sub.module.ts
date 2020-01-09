import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttractionSubPage } from './attraction-sub';

@NgModule({
  declarations: [
    AttractionSubPage,
  ],
  imports: [
    IonicPageModule.forChild(AttractionSubPage),
  ],
})
export class AttractionSubPageModule {}
