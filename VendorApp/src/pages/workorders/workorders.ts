import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { WorkorderdetailsPage } from '../workorderdetails/workorderdetails';


@IonicPage()
@Component({
  selector: 'page-workorders',
  templateUrl: 'workorders.html',
})
export class WorkordersPage {

  // searchInput: any;
  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;

  loading: any;
  workorders: any = [];
  tempWorksData: any = [];
  currentUser: any = {};
  current: boolean = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authService: AuthServiceProvider
  ) {
    if (localStorage.getItem('currentUser') !== null) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkordersPage');
    this.getUserWorkHistory("NOW");
    this.setFilteredItem();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredItem();
    });
  }
  onSearchInput() {
    this.searching = true;
  }

  setFilteredItem() {
    this.workorders = this.compareFunc(this.searchTerm);
  }
  compareFunc(searchTerm) {

    return this.tempWorksData.filter((result) => {
      return result.woDesc.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    })

  }
  getUserWorkHistory(type) {
    this.current = type;
    console.log('get data ', type);
    this.getLoadingMessage(type);
    this.authService.getworkingHistory(this.currentUser.vendor_id, type).then((data: any) => {
      this.workorders = data;
      this.tempWorksData = data;
      this.finishLoading();
    }).catch(err => {
      this.finishLoading();
      this.alertCtrl.create({
        subTitle: "Error!",
        message: err.message,
        buttons: ["Ok0"]
      }).present();
    })

  }
  finishLoading() {
    if (this.loading !== null) {
      this.loading.dismiss();
    }
  }
  getLoadingMessage(message) {
    this.loading = this.loadingCtrl.create({
      content: 'Finding your work... (' + message + ')',
      spinner: 'hide',
      cssClass: 'my-loading-class'
    });
    this.loading.present();
  }

  doRefresh(value) {
    this.getUserWorkHistory(value);
/*    if (value == 'PAST') {
      this.getLoadingMessage('PAST');
      setTimeout(() => {
        this.finishLoading();
      }, 1000);

    } else if (value == 'NOW') {
      this.getLoadingMessage('NOW');
      setTimeout(() => {
        this.finishLoading();
      }, 1000);
    } else if (value == 'FUTURE') {
      this.getLoadingMessage('FUTURE');
      setTimeout(() => {
        this.finishLoading();
      }, 1000);
    }*/
  }
  viewData(id) {
    this.navCtrl.push(WorkorderdetailsPage, { orderData: this.workorders[id] });
  }
  searchData() {

  }
}
