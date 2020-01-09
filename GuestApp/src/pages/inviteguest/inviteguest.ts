import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-inviteguest',
  templateUrl: 'inviteguest.html',
})
export class InviteguestPage {
  currentGuestProfile: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.currentGuestProfile = navParams.get('viewGuestProfile');
    console.log("currentGusetProfile", this.currentGuestProfile);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InviteguestPage');
  }
  deleteBtn(){
    let confirmFlag = true;
    this.viewCtrl.dismiss(confirmFlag);
  }
  closeBtn(){
    this.viewCtrl.dismiss();
  }
}
