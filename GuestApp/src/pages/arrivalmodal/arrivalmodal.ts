import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {SubmapPage} from "../submap/submap";

@IonicPage()
@Component({
  selector: 'page-arrivalmodal',
  templateUrl: 'arrivalmodal.html',
})
export class ArrivalmodalPage {
  modal_content: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
    ) {
      this.modal_content = navParams.get('arModalData');
      console.log("modal_content", this.modal_content);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArrivalmodalPage');
  }

  confirm(){
    // var  map_address = "601 Sandbridge Road Virginia Beach, VA 23456";
    // this.navCtrl.push(SubmapPage, {mapviewData: map_address});
    this.viewCtrl.dismiss();

  }
  closeBtn(){
    this.viewCtrl.dismiss();
  }
}
