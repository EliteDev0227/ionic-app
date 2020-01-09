import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-connect',
  templateUrl: 'connect.html',
})
export class ConnectPage {
  loading: any;
  connects: any = [];
  connect_hskp: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public callNumber: CallNumber
  ) {

    this.connects = [
      { "name": "Trent S", "phone": "757-426-6200" },
      { "name": "Joadi L", "phone": "757-426-6200" },
      { "name": "Kate F", "phone": "757-426-6200" },
      { "name": "Kimberly B", "phone": "757-426-6200" }
    ];

    this.connect_hskp = [
      { "name": "Amberly B", "phone": "757-426-6200" },
      { "name": "Laura ", "phone": "757-426-6200" },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectPage');
    this.getConnectUsers();
  }

  getConnectUsers() {
    this.loading = this.loadingCtrl.create({
      content: "Loading...",
      spinner: 'hide',
      cssClass: 'my-loading-class'
    });
    this.loading.present();

    setTimeout(() => {
      this.loading.dismiss();
    }, 1000);
  }
  viewConnect(id){
    this.callNumber.callNumber(this.connects[id].name, true).then(res =>{
      console.log("Launch Dialer!", res);
    }).catch(err =>{
      console.log("Error Launching Dialer", err);
    });
  }
  viewConnectHouseKp(id){
    this.callNumber.callNumber(this.connect_hskp[id].name, true).then(res =>{
      console.log("Launch Dialer!", res);
    }).catch(err =>{
      console.log("Error Launching Dialer", err);
    });
  }

}
