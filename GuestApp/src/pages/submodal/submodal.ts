import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SubmapPage } from "../submap/submap"

@IonicPage()
@Component({
  selector: 'page-submodal',
  templateUrl: 'submodal.html',
})
export class SubmodalPage {
  modal_content: any = {};

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) {
    this.modal_content = navParams.get('subModalData');
    console.log("modal_content", this.modal_content);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmodalPage');
  }
  confirm() {
    this.navCtrl.push(SubmapPage, { mapviewData: this.modal_content.title });
    this.viewCtrl.dismiss();

  }
  closeBtn() {
    this.viewCtrl.dismiss();
  }
}
