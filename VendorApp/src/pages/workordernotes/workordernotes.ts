import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController, ToastController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-workordernotes',
  templateUrl: 'workordernotes.html',
})
export class WorkordernotesPage {
  @ViewChild('myInput') myInput: ElementRef;
  workOrderData: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public authService: AuthServiceProvider

  ) {
    this.workOrderData = this.navParams.get('subModalData');
    console.log("note_data", this.workOrderData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkordernotesPage');
  }

  resize() {
    var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
  }


  confirm() {
    let loading = this.loadingCtrl.create({
      content: "Syncing...",
      spinner: 'hide',
      cssClass: 'my-loading-class'
    });
    loading.present();
    this.authService.getWorkOrderUpdate(this.workOrderData.id, this.workOrderData.referalNeeded, this.workOrderData.woWorkDone).then((data: any) => {
      console.log("result_update_data", data);
      setTimeout(() => {
        if (loading !== null) {
          loading.dismiss();
          this.viewCtrl.dismiss();
        }
      }, 1000);
    }).catch(err => {
      console.log("Error update ---", err.message);
      if (loading !== null) {
        loading.dismiss();
      }
      this.alertCtrl.create({
        subTitle: "Error!",
        message: err.message,
        buttons: ["Ok"]
      }).present();
    })
  }
  close() {
    this.viewCtrl.dismiss();
  }
}
