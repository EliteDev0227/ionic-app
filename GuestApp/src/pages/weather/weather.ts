import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { WeathersubPage } from "../weathersub/weathersub";
import { ApiOperatorProvider } from '../../providers/api-operator/api-operator';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';


@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

  loading: any;
  resData: any = {};
  weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"];
  weatherInfo: any = {};
  currently: any = {};
  weekly: any = {};
  selectDay: any = {};
  lat: any = '';
  lng: any = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mdlCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public apiDataProvider: ApiOperatorProvider,
    public alertCtrl: AlertController,
    public nativeGeocoder: NativeGeocoder

  ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
    this.getPosition();
    // this.getWeatherData();
  }

  getPosition() {
    this.loading = this.loadingCtrl.create({
      content: '',
      spinner: "bubbles",
      cssClass: 'my-loading-class'
    });
    this.loading.present();

    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    var zipcode = "23456";
    this.nativeGeocoder.forwardGeocode(zipcode, options).then((coordinates: NativeGeocoderForwardResult[]) => {
      console.log('The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude);
      this.lat = coordinates[0].latitude;
      this.lng = coordinates[0].longitude;
      this.getWeatherData(this.lat, this.lng);

    }).catch((error: any) => console.log("GeoGoder Error!", error));
    if (this.loading !== undefined) {
      this.loading.dismiss();
    }
    // this.getWeatherData(36.7259474, -75.9727555);
  }
  getWeatherData(lat, lng) {
    // var lat = 36.7259474;
    // var lng = -75.9727555;
    this.apiDataProvider.getCurrentWeatherData(lat, lng).then((data: any) => {
      if (data) {
        console.log("Weather_data", data);
        this.weatherInfo = data;
        this.currently = data.currently;
        this.weekly = data.daily;
      } else {
        this.alertCtrl.create({
          title: "Error",
          message: "There is no Data",
          buttons: ["OK"]
        }).present();


      }
      if (this.loading !== undefined) {
        this.loading.dismiss();
      }
    }).catch(err => {
      console.log("Reult_err", err.message);
      if (this.loading !== undefined) {
        this.loading.dismiss();
      }
    });

  }

  getDayName(id) {
    var currentDay = new Date().getDay();
    console.log("GetDayName", id);
    var dayReturnIndex = + id;
    if (dayReturnIndex > 8) {
      dayReturnIndex -= 8;
      console.log("weekDay", this.weekDays[dayReturnIndex]);
    }
    return this.weekDays[dayReturnIndex];
  }
  getDate(id) {
    return '';
  }

  selectedDay(id) {
    this.selectDay = this.weekly.data[id];
    this.selectDay.dayName = this.getDayName(id);
    let weather_modal = this.mdlCtrl.create(WeathersubPage, { modalDataInfo: this.selectDay, modalDataId: this.selectDay.dayName });
    weather_modal.present();
  }

  changeTeamp(temp) {
    var ftemp = temp * 9 / 5 + 32;
    return Math.round(ftemp);
  }
}
