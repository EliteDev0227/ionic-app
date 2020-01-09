import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, PopoverController, AlertController, ToastController } from 'ionic-angular';
import { PhoneinfoPage } from '../phoneinfo/phoneinfo';
import { CountrycodeProvider } from '../../providers/countrycode/countrycode';
import { ApiOperatorProvider } from '../../providers/api-operator/api-operator';
import { SMS } from '@ionic-native/sms';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
@IonicPage()
@Component({
  selector: 'page-inviteothers',
  templateUrl: 'inviteothers.html',
})
export class InviteothersPage {
  currentCountryCode: any = "";
  currentDialCode: any = "+1";
  imageUrl: any = "assets/imgs/flag/us.svg";
  houseName: any;
  phoneNumber: any;
  guestName: any;
  modal_data: any = {};
  leaseData: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public countryService: CountrycodeProvider,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public sms: SMS,
    public apiDataProvider: ApiOperatorProvider,
    public toastCtrl: ToastController,
  ) {
    if (localStorage.getItem('leaseData') !== null) {
      this.leaseData = JSON.parse(localStorage.getItem('leaseData'));
    } else {
      this.leaseData = "";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InviteothersPage');
  }
  closeBtn() {
    this.viewCtrl.dismiss();
  }
  openPhoneNumber() {
    let key = this.currentCountryCode
    let countryModal = this.modalCtrl.create(PhoneinfoPage, { key });
    countryModal.onDidDismiss(data => {
      console.log("modalData", data);
      this.getCountryCode(data);
    });
    countryModal.present();
  }
  getCountryCode(codeName) {
    console.log("countryName", codeName);
    this.countryService.getCountryCode(codeName).subscribe(result => {
      console.log("result", result);
      this.currentCountryCode = result.code;
      let code = this.currentCountryCode.toLowerCase();
      console.log("code", code);
      this.currentDialCode = result.dial_code;
      this.imageUrl = "assets/imgs/flag/" + code + ".svg";
    });
  }
  confirm() {
    if (this.phoneNumber == "" || this.houseName == "" || this.guestName == "") {
      this.alertCtrl.create({
        title: "Error",
        message: "Invalid Credientail",
        buttons: ["Ok"]
      }).present();
    } else {
      this.modal_data.phone = this.phoneNumber;
      this.modal_data.trip = this.houseName;
      this.modal_data.guest = this.guestName;
      this.viewCtrl.dismiss(this.modal_data);
    }
  }
}
