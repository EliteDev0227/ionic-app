import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ModalController, ModalOptions } from 'ionic-angular';
import { ApiOperatorProvider } from '../../providers/api-operator/api-operator';
import { SubmodalPage } from '../submodal/submodal';
import { UpcomingmodalPage } from "../upcomingmodal/upcomingmodal";

@IonicPage()
@Component({
  selector: 'page-upcomeevent',
  templateUrl: 'upcomeevent.html',
})
export class UpcomeeventPage {
  resMenu: any;
  resImage: any = './assets/imgs/event/business.jpg';
  loading: any;
  resData: any = {};
  objectKeys = Object.keys;
  isHidden: boolean = false;
  modal_data: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public apiDataProvider: ApiOperatorProvider,
    public mdlCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomeeventPage');
    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: "bubbles",
    });
    this.loading.present();
    this.getEventData();
  }

  getEventData() {
    this.apiDataProvider.getUpComingEventData().then((data: any) => {
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
  viewData(title, des, address, phone) {
    console.log("Click_data", title, address);
    this.modal_data.des = des;
    this.modal_data.title = title;
    this.modal_data.address = address;
    this.modal_data.phone = phone;

    const modalOptions: ModalOptions = {
      cssClass: "subModal"
    };
    let sub_modal = this.mdlCtrl.create(UpcomingmodalPage, { subModalData: this.modal_data }, modalOptions);
    sub_modal.present();
  }
  confirm() {
    this.isHidden = false;
  }


}
