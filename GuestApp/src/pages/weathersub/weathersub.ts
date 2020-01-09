import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-weathersub',
  templateUrl: 'weathersub.html',
})
export class WeathersubPage {

  weatherData: any = {};
  CurrentDate: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.weatherData = navParams.get('modalDataInfo');
    this.CurrentDate = navParams.get('modalDataId');
    console.log("current_date_info", this.weatherData);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeathersubPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }

}
