import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkordernotesPage } from './workordernotes';

@NgModule({
  declarations: [
    WorkordernotesPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkordernotesPage),
  ],
})
export class WorkordernotesPageModule {}
