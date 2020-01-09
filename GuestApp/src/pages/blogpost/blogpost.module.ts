import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogpostPage } from './blogpost';

@NgModule({
  declarations: [
    BlogpostPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogpostPage),
  ],
})
export class BlogpostPageModule {}
