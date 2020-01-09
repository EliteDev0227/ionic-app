import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SubmapPage } from "../submap/submap";

@IonicPage()
@Component({
  selector: 'page-upcomingmodal',
  templateUrl: 'upcomingmodal.html',
})
export class UpcomingmodalPage {
  modal_content: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.modal_content = navParams.get('subModalData');
    console.log("modal_content", this.modal_content);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingmodalPage');
  }
  confirm() {
    console.log("upcomming data", this.modal_content.address);
    this.navCtrl.push(SubmapPage, { mapviewData: this.modal_content.address });
    this.viewCtrl.dismiss();

  }
  closeBtn() {
    this.viewCtrl.dismiss();
  }



}
