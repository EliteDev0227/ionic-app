import { Component, NgZone, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Platform } from 'ionic-angular';
import { ApiOperatorProvider } from '../../providers/api-operator/api-operator';
import { AttractionSubPage } from "../attraction-sub/attraction-sub";

@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {
  @ViewChild('scroll') scroll: any;
  resMenu: any;
  resImage: any = './assets/imgs/resturant/food.png';
  loading: any = null;
  resData: any = {};
  objectKeys = Object.keys;
  browser: any;
  modal_data: any = {};
  currentArraction: any = {};
  arractionData: any = [];
  current_selected: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public apiDataProvider: ApiOperatorProvider,
    public ngZone: NgZone,
    public alertCtrl: AlertController,
    public platform: Platform
  ) {
    this.currentArraction = navParams.get('currentAttractionData');
    this.arractionData = navParams.get('wholeAttractionData');
    this.current_selected = navParams.get('currentId');
    console.log("arrtaction_data", this.currentArraction, this.arractionData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantsPage');
    var temp =  document.getElementById('btn_num_' + this.current_selected).getBoundingClientRect();
    console.log("CurrentLeft", temp.left);
    this.scroll._scrollContent.nativeElement.scrollLeft = temp.left - 20;
    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: "bubbles",
      cssClass: 'my-loading-class'
    });
    this.loading.present();
    this.getResturant();

  }
  getResturant() {
    if (this.loading !== null) {
      this.loading.dismiss();
    }
  }
  viewData(subData) {
    console.log("Click_data", subData);
    this.modal_data = subData;
    this.modal_data.name = this.currentArraction.name;
    this.navCtrl.push(AttractionSubPage, { subModalData: this.modal_data });

  }

  selectCategory(btnId) {
    console.log("btn_number", btnId);
    this.current_selected = btnId;
    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: "bubbles",
    });
    this.loading.present();
    this.getContentArractionData(btnId);
  }
  getContentArractionData(btnId) {
    this.currentArraction = this.arractionData[btnId];
    console.log("current_id", this.currentArraction);
    if (this.loading !== null) {
      this.loading.dismiss();
    }
  }

}
