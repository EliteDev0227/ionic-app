import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkorderinvoicePage } from './workorderinvoice';

@NgModule({
  declarations: [
    WorkorderinvoicePage,
  ],
  imports: [
    IonicPageModule.forChild(WorkorderinvoicePage),
  ],
})
export class WorkorderinvoicePageModule {}
