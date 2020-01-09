import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WeathersubPage } from './weathersub';

@NgModule({
  declarations: [
    WeathersubPage,
  ],
  imports: [
    IonicPageModule.forChild(WeathersubPage),
  ],
})
export class WeathersubPageModule {}
