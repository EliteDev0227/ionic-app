import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-phonelogin',
  templateUrl: 'phonelogin.html',
})
export class PhoneloginPage {
  guest: any = {};
  phone: any;
  shareCode: any
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneloginPage');
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
  withPhoneLogin(){
    console.log("user", this.guest.phone, this.guest.shareCode);
    if(this.phone = undefined || this.guest.shareCode == undefined){
      this.alertCtrl.create({
        subTitle: "Error!",
        message: "Invalid Credential",
        buttons: ["Ok"]
      }).present();
    } else {
      this.viewCtrl.dismiss(this.guest);
    }
  }
}
