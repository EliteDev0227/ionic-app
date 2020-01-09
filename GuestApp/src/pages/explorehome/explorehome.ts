import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';


@IonicPage()
@Component({
  selector: 'page-explorehome',
  templateUrl: 'explorehome.html',
})
export class ExplorehomePage {

  groups: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public socialSharing: SocialSharing,
    public alertCtrl: AlertController
  ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorehomePage');
    this.viewData();
  }
  viewData() {
    this.groups = [];
    for (var i = 0; i < 10; i++) {
      this.groups[i] = {
        name: i,
        items: [],
        show: false
      };
      for (var j = 0; j < 3; j++) {
        this.groups[i].items.push(i + '-' + j);
      }
    }
  }
  toggleGroup(group) {
    group.show = !group.show
  }
  contact() {
    this.socialSharing.canShareViaEmail().then(() => {
      console.log("result_ok");
    }).catch(err => {
      this.alertCtrl.create({
        subTitle: "Error!",
        message: err.message,
        buttons: ["OK"]
      }).present();
    });

    let email = {
      to: 'mail@siebert-realty.com',
      cc: 'mail@siebert-realty.com',
      bcc: ['john@doe.com'],
      subject: 'House Wiki',
      message: 'This is the message content...',
      isHtml: true
    };
    this.socialSharing.shareViaEmail(email.message, email.subject, [email.to]).then(success => {
      console.log("success_share");
    }).catch(err => {
      this.alertCtrl.create({
        subTitle: "Error!",
        message: err.message,
        buttons: ["OK"]
      }).present();
    })
  }
}
