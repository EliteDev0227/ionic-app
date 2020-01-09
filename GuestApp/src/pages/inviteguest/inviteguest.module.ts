import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InviteguestPage } from './inviteguest';

@NgModule({
  declarations: [
    InviteguestPage,
  ],
  imports: [
    IonicPageModule.forChild(InviteguestPage),
  ],
})
export class InviteguestPageModule {}
