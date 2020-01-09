import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkordersPage } from './workorders';

@NgModule({
  declarations: [
    WorkordersPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkordersPage),
  ],
})
export class WorkordersPageModule {}
