import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Platform, ModalController, ModalOptions } from 'ionic-angular';
import { ApiOperatorProvider } from '../../providers/api-operator/api-operator';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { RentmapPage } from "../rentmap/rentmap";
import { EmailComposer } from '@ionic-native/email-composer';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import {RentalmodalPage} from "../rentalmodal/rentalmodal";


@IonicPage()
@Component({
  selector: 'page-rentdetails',
  templateUrl: 'rentdetails.html',
})
export class RentdetailsPage {
  resData: any = [];
  resUnitId: any;
  loading: any;
  isHidden: boolean = false;
  modal_title: any;
  modal_phone: any;
  modal_des: any;
  viewHtmlShow: boolean = false;
  browser: any;
  modal_data: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public apiDataProvider: ApiOperatorProvider,
    public alertCtrl: AlertController,
    public iab: InAppBrowser,
    public platform: Platform,
    public emailComposer: EmailComposer,
    public photoViewer: PhotoViewer,
    public mdlCtrl: ModalController
  ) {
    this.resUnitId = navParams.get('rentdetailId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentdetailsPage');

    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: "bubbles",
    });
    this.loading.present();
    this.getRentDetails();
  }
  getRentDetails() {
    this.apiDataProvider.getRentalDetailsData(this.resUnitId).then((data: any) => {
      if (data) {
        this.resData = data;
        console.log("temp_data", this.resData);
        this.loading.dismiss();
      } else {
        this.alertCtrl.create({
          title: "Error",
          message: "There is no Data",
          buttons: ["OK"]
        }).present();
        this.loading.dismiss();
      }
    }).catch(err => {
      console.log("Reult_err", err.message);
      this.loading.dismiss();
    });
  }
  viewDes() {
    this.modal_data.des = this.resData.description;
    this.modal_data.title = "Description";
    this.modal_data.ishidden = true;

    const modalOptions: ModalOptions = {
      cssClass: "subModal"
    };
    let sub_modal = this.mdlCtrl.create(RentalmodalPage, {subModalData: this.modal_data}, modalOptions);
    sub_modal.present();

  }

  viewGallery() {
    this.photoViewer.show('https://www.siebert-realty.com/units/pics/' + this.resUnitId + '.jpg');
  }
  viewMap() {
    this.navCtrl.push(RentmapPage);
  }
  viewAmenty() {
    this.modal_data.des = this.resData[0];
    this.modal_data.title = "Description";
    this.modal_data.ishidden = true;
    const modalOptions: ModalOptions = {
      cssClass: "subModal"
    };
    let sub_modal = this.mdlCtrl.create(RentalmodalPage, {subModalData: this.modal_data}, modalOptions);
    sub_modal.present();

  }
  viewAvaliablity() {
    this.modal_data.des = "TODO: BRING IN AVAIL CALENDAR";
    this.modal_data.title = "Avaliablity";
    this.modal_data.ishidden = false;
    const modalOptions: ModalOptions = {
      cssClass: "subModal"
    };
    let sub_modal = this.mdlCtrl.create(RentalmodalPage, {subModalData: this.modal_data}, modalOptions);
    sub_modal.present();
  }

  viewWebsite() {
    let url = "https://www.siebert-realty.com/";
    console.log("MenuId", url);
    if (this.platform.is('android')) {
      let options = "hardwareback=no";
      this.browser = this.iab.create(url, "_blank", options);
    } else {
      this.browser = this.iab.create(url, "_blank");
    }
    this.browser.on('exit').subscribe(event => {
      console.log("event", event);
      this.browser.close();
      console.log("Appbrowser closed");
    }, error => {
      console.log("error", error);
      this.browser.close();
    });
  }
  confirm() {
    this.isHidden = false;
    this.viewHtmlShow = !this.viewHtmlShow;
  }
  viewBook() {

  }
  sendEmail() {
    this.emailComposer.isAvailable().then((avaliable: boolean) => {
      if (avaliable) {
        console.log("avaliable");
      } else {
        this.alertCtrl.create({
          subTitle: "Confirm",
          message: "Can't send the email now.",
          buttons: ["OK"]
        }).present();
      }
    });
    let email = {
      to: 'max@mustermann.de',
      cc: 'erika@mustermann.de',
      bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        'file://img/logo.png',
        'res://icon.png',
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        'file://README.pdf'
      ],
      subject: 'Rent house...',
      body: 'This is the message content...',
      isHtml: true
    };
    this.emailComposer.open(email);
  }
}
