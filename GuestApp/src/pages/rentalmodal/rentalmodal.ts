import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rentalmodal',
  templateUrl: 'rentalmodal.html',
})
export class RentalmodalPage {
  modal_content: any = {};
  viewHtmlShow: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.modal_content = navParams.get('subModalData');
    this.viewHtmlShow =  this.modal_content.ishidden;
    console.log("modal_content", this.modal_content);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentalmodalPage');
  }
  confirm() {
    this.viewCtrl.dismiss();
  }
  closeBtn(){
    this.viewCtrl.dismiss();
  }
}
