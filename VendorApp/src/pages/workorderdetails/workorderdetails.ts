import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ModalController, ModalOptions, ActionSheetController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { WorkordernotesPage } from '../workordernotes/workordernotes';
import { MapsPage } from '../maps/maps';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { WorkorderTextPage } from '../workorder-text/workorder-text';
import { WorkorderimagePage } from '../workorderimage/workorderimage';
import { WorkorderinvoicePage } from '../workorderinvoice/workorderinvoice';

@IonicPage()
@Component({
  selector: 'page-workorderdetails',
  templateUrl: 'workorderdetails.html',
})
export class WorkorderdetailsPage {
  workorderData: any = {};
  workhistoryData: any = {};
  // contacts: any = [];
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public authService: AuthServiceProvider,
    public callNumber: CallNumber,
    public actionSheetCtrl: ActionSheetController,
    public emailComposer: EmailComposer
  ) {
    this.workorderData = navParams.get('orderData');
    console.log("WorkOrderDetails", this.workorderData);

    // this.contacts = [
    //   { "name": "Take Photo", "image": "assets/imgs/order/camera.svg" },
    //   { "name": "Add Invoice", "image": "assets/imgs/order/invoice.svg" },
    //   { "name": "Call Property", "image": "assets/imgs/order/call.svg" },
    //   { "name": "Call Owner", "image": "assets/imgs/order/call.svg" },
    //   { "name": "Contact Office", "image": "assets/imgs/order/contact1.svg" },
    //   { "name": "Get Directions", "image": "assets/imgs/order/map2.svg" },
    // ]
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad WorkorderdetailsPage');
  //   this.getOrderData();
  // }

  ionViewDidEnter(){
    console.log('ionViewDidEnter WorkorderdetailsPage');
    this.getOrderData();
  }

  getOrderData() {
    this.loading = this.loadingCtrl.create({
      content: "Loading...",
      spinner: 'hide',
      cssClass: 'my-loading-class'
    });
    this.loading.present();

    this.authService.getWorkOrderDetails(this.workorderData.woNum).then((data: any) => {
      console.log("result_order_data", data);
      this.workhistoryData = data;
      if (this.loading !== null) {
        setTimeout(() => {
          this.loading.dismiss();
        }, 1500);
      }
    }).catch(err => {
      console.log("Error_data", err.message);
      if (this.loading !== null) {
        setTimeout(() => {
          this.loading.dismiss();
        }, 1500);
      };
      this.alertCtrl.create({
        subTitle: "Error!",
        message: err.message,
        buttons: ["Ok"]
      }).present();
    })
  }

  viewContact(id) {
    console.log("contact_paage_info", id);
    switch (id) {
      case 0:
        this.getAttactmentData("img");
        break;
      case 1:
        this.getInvoice();
        break;
      case 2:
        this.getPhoneCall(this.workhistoryData.unitPhone);
        break;
      case 3:
        this.getPhoneCall(this.workhistoryData.ownerPhone);
        break;
      case 4:
        this.getContactOffice();
        break;
      case 5:
        this.navCtrl.push(MapsPage, { mapData: this.workhistoryData.unitAddress });
        break;
      default:
        break;
    }
  }
  getContactOffice() {
    var self = this;
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact Siebert',
      buttons: [
        {
          text: 'Email',
          handler: () => {
            self.sendEmail();
          }
        },
        {
          text: 'Text',
          handler: () => {
            self.sendText();
          }
        },
        {
          text: 'Chat',
          handler: () => {
            self.sendChat();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });
    actionSheet.present();
  }

  getPhoneCall(phoneNumber) {
    let str = phoneNumber;
    let pstr = str.replace("-", "");
    let phoneNum = pstr.replace("-", "");
    console.log("phone_number", phoneNum);
    this.callNumber.callNumber(phoneNum, true).then(res => {
      console.log("Launched Dialer!", res);
    }).catch(err => {
      console.log("Error Launching Dialer", err);
    })

  }
  viewNoteData() {
    let sub_modal = this.modalCtrl.create(WorkordernotesPage, { subModalData: this.workhistoryData });
    sub_modal.onDidDismiss(data => {
      this.getOrderData();
    })
    sub_modal.present();
  }

  getAttactmentData(checkData) {
    this.navCtrl.push(WorkorderimagePage, { attachData: checkData, orderData: this.workhistoryData});
  }

  // invoice
  getInvoice() {
    var self = this;
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Option to continue',
      buttons: [
        {
          text: 'Upload Invoice',
          handler: () => {
            self.getAttactmentData("inv");
          }
        },
        {
          text: 'Complete Form',
          handler: () => {
            self.getCompleteForm();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });
    actionSheet.present();
  }
  getCompleteForm() {
    this.navCtrl.push(WorkorderinvoicePage);

  }

  // contact Info page...
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
      to: 'darrius@siebert-realty.com',
      subject: 'Contact Issues',
      body: 'Hey I need ....',
      isHtml: true
    };
    this.emailComposer.open(email);
  }
  sendText() {
    const modalOptions: ModalOptions = {
      cssClass: "subModal"
    };

    let sub_modal = this.modalCtrl.create(WorkorderTextPage, "", modalOptions);
    sub_modal.onDidDismiss(data => {
      if (data !== undefined) {
        console.log("res_Text_modal", data);
      }
    });
    sub_modal.present();

  }
  sendChat() {

  }

  // start Job
  startJob() {
    let loadingData = this.loadingCtrl.create({
      content: "Syncing...",
      spinner: 'hide',
      cssClass: 'my-loading-class'
    });
    loadingData.present();

    this.authService.getStartWorkOrder(this.workorderData.woID).then((data: any) => {

      if (loadingData !== null) {
        setTimeout(() => {
            this.getOrderData();
          loadingData.dismiss();

        }, 1000);
      }

    }).catch(err => {
      console.log("Error Start Job", err.message);

      if (loadingData !== null) {
        setTimeout(() => {
          loadingData.dismiss();

        }, 1000);
      }

      this.alertCtrl.create({
        subTitle: "Error Start Job",
        message: err.message,
        buttons: ["Ok"]
      }).present();
    })
  }

  endJob() {
    this.alertCtrl.create({
      title: "Are you sure?",
      message: "Verify that all work is completed and noted?",
      buttons: [{
        text: "Cancel",
        role: 'cancel',
        handler: () => {
          return;
        }
      },
      {
        text: "Ok",
        handler: () => {
          this.getEndJob();
        }
      }
      ]
    }).present();
  }
  getEndJob() {
    this.authService.getEndWorkOrder(this.workorderData.woID).then((data: any) => {
      console.log("End Job", data);
        this.getOrderData();
    }).catch(err => {
      console.log("end job error", err.message);
      this.alertCtrl.create({
        subTitle: "Error End Job",
        message: err.message,
        buttons: ["Ok"]
      }).present();
    })
  }
}
