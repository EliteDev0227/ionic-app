import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavelaterPage } from './savelater';

@NgModule({
  declarations: [
    SavelaterPage,
  ],
  imports: [
    IonicPageModule.forChild(SavelaterPage),
  ],
})
export class SavelaterPageModule {}
