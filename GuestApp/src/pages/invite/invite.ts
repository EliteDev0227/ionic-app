import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController, ModalOptions, ModalController } from 'ionic-angular';
import { ApiOperatorProvider } from '../../providers/api-operator/api-operator';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { SMS } from '@ionic-native/sms';
import { InviteguestPage } from "../inviteguest/inviteguest";
import { InviteothersPage } from "../inviteothers/inviteothers";


@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {
  loading: any;
  userList: any = [];
  currentUserId: any;
  alert: any;
  inviteUserInfo: any = {};
  inviteFlag: boolean = false;
  inviteResFlag: boolean = false;
  inviteResData: any = {};
  inviteShareResData: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public apiDataProvider: ApiOperatorProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService: AuthserviceProvider,
    public sms: SMS,
    public mdlCtrl: ModalController,
  ) {
    if (localStorage.getItem('user_id') !== null) {
      this.currentUserId = localStorage.getItem("user_id")
    };
    if (localStorage.getItem('current_lease') !== null) {
      this.inviteUserInfo = JSON.parse(localStorage.getItem('current_lease'));
    } else {
      this.authService.getcurrentUserData(this.currentUserId).subscribe((res: any) => {
        this.inviteUserInfo = res.val();
      }, err => {
        console.log("Error", err.message);
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitePage');
    this.getUserEmailList();
  }

  addGuest() {
    this.inviteFlag = false;
    const modalOptions: ModalOptions = {
      cssClass: "subModal"
    };
    let sub_modal = this.mdlCtrl.create(InviteothersPage, "", modalOptions);
    sub_modal.onDidDismiss(data => {
      if (data !== undefined) {
        console.log("res_invite_modal", data);
        this.inviteResData = data;
        this.getShareData(this.inviteResData.phone);
      }
    });
    sub_modal.present();

  }
  getShareData(phone) {
    console.log("invitInfo", this.inviteUserInfo, phone);
    let lease = this.inviteUserInfo.lease_id;
    let guest_id = this.inviteUserInfo.guest_id;

    this.apiDataProvider.getInviteGuestData(phone, lease, guest_id).subscribe((inviteRes: any) => {
      this.inviteFlag = true;
      console.log("share_userData", inviteRes);
      if (inviteRes.status !== 'success') {
        this.inviteResFlag = false;
        // this.alert(inviteRes.status);
      } else {
        this.inviteResFlag = true;
        this.inviteShareResData = inviteRes;
      }
    })
  }
  saveUserData(inviteRes, shareRes) {
    this.apiDataProvider.setGuestData(this.currentUserId, inviteRes, shareRes).subscribe((resData: any) => {
      this.getUserEmailList();
    })
  }

  getUserEmailList() {
    this.loading = this.loadingCtrl.create({
      content: "wait...",
      spinner: "bubbles"
    });
    this.loading.present();
    this.apiDataProvider.getGuestData(this.currentUserId).then(snapshot => {
      console.log("result_data", snapshot.val());
      this.userList = snapshot.val();
      this.loading.dismiss();
    }).catch(err => {
      this.alertCtrl.create({
        subTitle: "Error!",
        message: err.message,
        buttons: ["OK"]
      }).present();
      this.loading.dismiss();
    })
  }
  viewGuestData(idx) {
    const modalOptions: ModalOptions = {
      cssClass: "subModal"
    };
    let sub_modal = this.mdlCtrl.create(InviteguestPage, { viewGuestProfile: this.userList[idx] }, modalOptions);
    sub_modal.onDidDismiss(data => {
      if (data !== undefined) {
        this.deleteUser(idx);
      }
    });
    sub_modal.present();
  }

  deleteUser(idx) {
    console.log("index", idx);
    this.apiDataProvider.getDeletedUserData(idx, this.currentUserId).then(resdata => {
      this.displayToastData("Removed Data!");
      this.getUserEmailList();
    }).catch(err => {
      this.displayToastData("Removed Data Fail!");
    })
  }
  displayToastData(message) {
    this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    }).present();
  }
  confirmDone() {
    this.inviteFlag = false;
    this.saveUserData(this.inviteResData, this.inviteShareResData);
    this.sms.send(this.inviteResData.phone, 'Hello! \n Download the Siebert Guest App and start your vacation now.\n Share Code:' + this.inviteShareResData.share_code);
  }
  keepInvite() {
    this.inviteFlag = false;
  }
  closeBtn() {
    this.inviteFlag = false;
  }
  retryButton() {
    this.inviteFlag = false;
    this.getShareData(this.inviteResData.phone);
  }
}
