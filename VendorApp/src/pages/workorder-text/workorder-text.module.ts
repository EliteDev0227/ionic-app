import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkorderTextPage } from './workorder-text';

@NgModule({
  declarations: [
    WorkorderTextPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkorderTextPage),
  ],
})
export class WorkorderTextPageModule {}
