import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkorderdetailsPage } from './workorderdetails';

@NgModule({
  declarations: [
    WorkorderdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkorderdetailsPage),
  ],
})
export class WorkorderdetailsPageModule {}
