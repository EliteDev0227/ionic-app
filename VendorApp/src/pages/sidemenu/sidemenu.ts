import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, AlertController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { WorkordersPage } from '../workorders/workorders';
import { MyalertPage } from '../myalert/myalert';
import { ConnectPage } from '../connect/connect';
import { SettingsPage } from '../settings/settings';
import { MainPage } from '../main/main';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-sidemenu',
  templateUrl: 'sidemenu.html',
})
export class SidemenuPage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  currentUser: any  = {};

  pages: Array<{ image: string, title: string, component: any }>;
  photoUrl: any = "assets/imgs/menu/empty_avatar.png"
  firstname: any;
  lastname: any;
  current_userData: any;
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    this.pages = [];
    if (localStorage.getItem('currentUser') !== null) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SidemenuPage');

    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: 'hide',
      cssClass: 'my-loading-class'
    });
    this.loading.present();
    this.viewPage();
    this.getCurrentUserData();

  }

  viewPage() {
    this.pages = [
      { image: 'assets/imgs/menu/nav1.svg', title: 'Home', component: HomePage },
      { image: 'assets/imgs/menu/nav2.svg', title: 'Work Orders', component: WorkordersPage },
      { image: 'assets/imgs/menu/nav3.svg', title: 'My Alerts', component: MyalertPage },
      { image: 'assets/imgs/menu/nav4.svg', title: 'Connect', component: ConnectPage },
      { image: 'assets/imgs/menu/nav5.svg', title: 'Settings', component: SettingsPage },
      { image: 'assets/imgs/menu/nav6.svg', title: 'Logout', component: null },
    ];

    this.loading.dismiss();
  }

  openPage(page) {
    if (page.component === null) {
      this.alertCtrl.create({
        title: "Confrim",
        message: "Are you sure want to Logout?",
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
            this.navCtrl.setRoot(MainPage);
          }
        }
        ]
      }).present();
      return;
    } else if (page.component === HomePage) {
      this.nav.setRoot(HomePage);
    } else {
      this.nav.push(page.component);
    }
  }

  viewProfile(){
    // this.nav.push(ProfilePage);
    this.navCtrl.push(ProfilePage);
  }

  getCurrentUserData() {

  }
}
