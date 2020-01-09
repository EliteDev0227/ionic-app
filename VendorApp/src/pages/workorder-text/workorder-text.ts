import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@IonicPage()
@Component({
  selector: 'page-workorder-text',
  templateUrl: 'workorder-text.html',
})
export class WorkorderTextPage {
  @ViewChild('myInput') myInput: ElementRef;

  phoneNumber: any;
  phones: any = [];
  textNote: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtr: LoadingController,
    public sms: SMS,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController
  ) {
    this.phones = [
      { "id": "Toll Free", "number": "(877)422-2200", "num": 8774222200 },
      { "id": "Local", "number": "(757)426-6200", "num": 7574266200 }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkorderTextPage');
  }

  resize() {
    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
  }

  closeBtn() {
    this.viewCtrl.dismiss();
  }

  confirm() {
    this.sms.send(this.phoneNumber, this.textNote);
    this.toastCtrl.create({
      message: "Sent Text Successfully!",
      duration: 3000,
      position: 'top'
    }).present();
    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 500);
  }
}
