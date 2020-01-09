import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, AlertController, ModalController, ModalOptions, Platform, ToastController, } from 'ionic-angular';
import { WeatherPage } from "../weather/weather";
import { RestaurantsPage } from "../restaurants/restaurants";
import { AttractionsPage } from "../attractions/attractions";
import { PromotionsPage } from "../promotions/promotions";
import { UpcomeeventPage } from "../upcomeevent/upcomeevent";
import { PaymentPage } from "../payment/payment";
import { RentalPage } from "../rental/rental";
import { ReportPage } from "../report/report";
import { InvitePage } from "../invite/invite";
import { Storage } from '@ionic/storage';
import { GettingmapPage } from "../gettingmap/gettingmap";
import { ApiOperatorProvider } from '../../providers/api-operator/api-operator';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Network } from '@ionic-native/network';
import { CallNumber } from '@ionic-native/call-number';
import { ArrivalmodalPage } from "../arrivalmodal/arrivalmodal";
import { NetworkProvider } from '../../providers/network/network';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { LocalattractionPage } from "../localattraction/localattraction";
import { RescatPage } from "../rescat/rescat";
import { TripsPage } from "../trips/trips";
import { PushnotificationProvider } from '../../providers/pushnotification/pushnotification';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) guide_slides: Slides;
  slide_items = [
    {
      id: 0,
      url: "./assets/imgs/rent/rent1.jpg",
      intro_txt: "4/21/2018-4/28/2018"
    },
    {
      id: 1,
      url: "./assets/imgs/rent/rent2.jpg",
      intro_txt: "4/21/2018-4/28/2018"
    },
    {
      id: 2,
      url: "./assets/imgs/rent/rent3.jpg",
      intro_txt: "4/21/2018-4/28/2018"
    },
  ]
  browser: any;
  map_address: any = "601 Sandbridge Road Virginia Beach, VA 23456";
  arrivalmodalData: any = {};
  lat: any;
  lng: any;
  weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  weatherInfo: any = {};
  currently: any = {};
  weekly: any = {};
  selectDay: any = {};
  forcastData: any = [];
  alert: any;
  current_user: any = {};
  leaseData: any = {};
  guestData: any = {};
  firstName: any;
  lastName: any;
  userFlag: boolean = false;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public mdlCtrl: ModalController,
    public apiDataProvider: ApiOperatorProvider,
    public iab: InAppBrowser,
    public platform: Platform,
    public storage: Storage,
    public network: Network,
    public callNumber: CallNumber,
    public toastCtrl: ToastController,
    public networkStatus: NetworkProvider,
    public nativeGeocoder: NativeGeocoder,
    public authService: AuthserviceProvider,
    public pushNotificationService: PushnotificationProvider
  ) {

    if (localStorage.getItem('user_id') !== null) {
      this.current_user = localStorage.getItem("user_id")
    }
    else
      this.current_user = null;

    if (localStorage.getItem('userType') == 'lease') {
      if (localStorage.getItem('leaseData') !== null) {
        this.leaseData = JSON.parse(localStorage.getItem('leaseData'));
        // this.current_user = this.leaseData.profile;
        this.userFlag = false;
        this.firstName = this.leaseData.profile.first_name;
        this.lastName = this.leaseData.profile.last_name;
      }
    } else if (localStorage.getItem('userType') == 'guest') {
      if (localStorage.getItem('guestData') !== null) {
        this.guestData = JSON.parse(localStorage.getItem('guestData'));
        console.log("home_guest_data", this.guestData);
        this.userFlag = true;
        this.firstName = this.guestData.GuestInfo.firstName;
        this.lastName = this.guestData.GuestInfo.lastName;
        console.log("image_url", this.guestData.UnitInfo.thumbnail);
      }
    }

    this.pushNotificationService.init();
    console.log("lease_data", this.leaseData, this.current_user);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.getHomeData();
  }
  getHomeData() {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    var zipcode = "23456";
    var address = "Sandbridge, Virginia Beach, VA, USA";
    this.nativeGeocoder.forwardGeocode(address, options).then((coordinates: NativeGeocoderForwardResult[]) => {
      console.log('The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude);
      this.lat = coordinates[0].latitude;
      this.lng = coordinates[0].longitude;
      this.getWeatherData(this.lat, this.lng);
    }).catch((error: any) => console.log(error));

  }

  getWeatherData(lat, lng) {
    this.apiDataProvider.getCurrentWeatherData(lat, lng).then((data: any) => {
      if (data) {
        console.log("Weather_data", data);
        this.weatherInfo = data;
        this.currently = data.currently;
        this.weekly = data.daily;
        this.forcastData = this.weekly.data;
      } else {
        this.alertCtrl.create({
          title: "Error",
          message: "There is no Data",
          buttons: ["OK"]
        }).present();
      }
    }).catch(err => {
      console.log("err", err.message);
    });
  }

  getDayName(id) {
    var currentDay = new Date().getDay();
    var dayReturnIndex = + id;
    if (dayReturnIndex > 8) {
      dayReturnIndex -= 8;
      console.log("weekDay", this.weekDays[dayReturnIndex]);
    }
    return this.weekDays[dayReturnIndex];
  }
  getDate(id) {
    return '';
  }

  viewAttractionData() {
    // this.navCtrl.push(AttractionsPage);
    this.navCtrl.push(LocalattractionPage);
  }
  viewEatData() {
    // this.navCtrl.push(RestaurantsPage);
    this.navCtrl.push(RescatPage);
  }
  viewEventData() {
    this.navCtrl.push(UpcomeeventPage);
  }
  viewDealData() {
    this.navCtrl.push(PromotionsPage);
  }
  viewReportData() {
    let report_modal = this.mdlCtrl.create(ReportPage);
    report_modal.present();
  }

  viewCallData() {
    this.callNumber.callNumber("7574266200", true).then(res => {
      console.log("Launch Dialer!", res)
    }).catch(err => {
      console.log("Error Launching Dialer", err);
    })
  }

  viewArrivalData() {
    const modalOptions: ModalOptions = {
      cssClass: "subModal"
    };

    this.arrivalmodalData.title = "Your arrival",
      this.arrivalmodalData.message = "Check in time is 3pm, come to our rental office at 601 Sandbrige Road. Upon arrival, you'll be given a Check in Packet containing your keys and information about our area."
    let sub_modal = this.mdlCtrl.create(ArrivalmodalPage, { arModalData: this.arrivalmodalData }, modalOptions);
    sub_modal.present();
  }

  viewInviteData() {
    this.navCtrl.push(InvitePage);
  }
  viewGuideData() {
    this.alertCtrl.create({
      title: "Check the Api",
      message: "This will show the via APi",
      buttons: ["OK"]
    }).present();
  }
  viewWeatherData() {
    this.navCtrl.push(WeatherPage);
  }

  viewPhoneData() {
    //
    var self = this;
    this.networkStatus.getNetworkStatus().subscribe((status) => {
      if (self.networkStatus.getNetworkType() == 'none') {
        self.displayToastData("We can't reach out network right now. Please check your connection");
      } else if (self.networkStatus.getNetworkType() !== 'none') {
        self.displayToastData("Netwrork Connected....");
        // this.getCallNumeber();
        this.showWifiPassword();
      }
    })
  }
  showWifiPassword() {
    this.alert = this.alertCtrl.create({
      title: "WIFI PASSWORD",
      inputs: [{
        name: 'number',
        placeholder: 'wifi password',
        type: 'tel'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'OK',
        handler: data => {
          console.log('data_result', data.number);
          if (data.number == this.guestData.UnitInfo.wifi_password) {
            console.log("ok");
            this.getCallNumeber();
          }
        }
      }
      ]
    });
    this.alert.present();
  }

  getCallNumeber() {
    this.callNumber.callNumber("7574266200", true).then((res) => {
      console.log("Launched dialer!", res)
    }).catch(err => {
      console.log("Error launching Dialer", err);
    })
  }
  displayToastData(message) {
    this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    }).present();
  }


  viewCatData(idx) {
    console.log("idx", idx);
    this.navCtrl.push(TripsPage, { tripsData: this.leaseData, tripsId: idx });
  }

  changeTeamp(temp) {
    var ftemp = temp * 9 / 5 + 32;
    return Math.round(ftemp);
  }
}
