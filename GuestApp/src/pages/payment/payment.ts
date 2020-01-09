import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ApiOperatorProvider } from '../../providers/api-operator/api-operator';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  paymentData: any = [];
  loading: any;
  browser: any;
  firstName: any;
  lastName: any;
  address1: any;
  address2: any;
  city: any;
  state: any;
  zip: any;
  phoneOne: any;
  email: any;
  country: any;
  leaseData: any = {};
  guestData: any = {};


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public iab: InAppBrowser,
    public platform: Platform,
    public loadingCtrl: LoadingController,
    public apiService: ApiOperatorProvider,
    public authService: AuthserviceProvider

  ) {
    if(localStorage.getItem('userType') == 'lease'){
      if(localStorage.getItem('leaseData') !== null){
        this.leaseData = JSON.parse(localStorage.getItem('leaseData'));
        // this.current_user = this.leaseData.profile;
        this.firstName = this.leaseData.profile.first_name;
        this.lastName = this.leaseData.profile.last_name;
        this.address1 = this.leaseData.profile.address_1;
        this.address2 = this.leaseData.profile.address_2;
        this.city = this.leaseData.profile.city;
        this.state = this.leaseData.profile.state;
        this.zip = this.leaseData.profile.zip;
        this.country = this.leaseData.profile.country;
        this.phoneOne = this.leaseData.profile.phone_1;
        this.email = this.leaseData.profile.Email;
      }
    } else if(localStorage.getItem('userType') == 'guest'){
      if(localStorage.getItem('guestData') !== null){
        this.guestData = localStorage.getItem('guestData');
        this.firstName = this.guestData.GuestInfo.firstName;
        this.lastName =  this.guestData.GuestInfo.lastName;
        this.address1 = this.leaseData.GuestInfo.address1;
        this.address2 = this.leaseData.GuestInfo.address2;
        this.city = this.leaseData.GuestInfo.city;
        this.state = this.leaseData.GuestInfo.state;
        this.zip = this.leaseData.GuestInfo.zip;
        this.phoneOne = this.leaseData.GuestInfo.phoneOne;
        this.email = this.leaseData.GuestInfo.Email;
      }
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: "bubbles",
      cssClass: 'my-loading-class'
    });
    this.loading.present();
    this.getPaymentData();
  }
  getPaymentData() {

    this.paymentData = [
      {
        title: 'E-Check Payment',
        // link: 'https://swp.paymentsgateway.net/co/default.aspx?pg_api_login_id=3a3lFI58lU&pg_continue_url=http://www.siebert-realty.com&e_pg_billto_postal_postalcode=',
        link: 'https://swp.paymentsgateway.net/co/default.aspx?pg_api_login_id=3a3lFI58lU&pg_continue_url=http://www.siebert-realty.com&e_pg_billto_postal_postalcode=&pg_billto_postal_name_first=' + this.firstName +'&pg_billto_postal_name_last=' + this.lastName + '&pg_billto_postal_street_line1=' + this.address1 + '&pg_billto_postal_street_line2=' + this.address2 + '&pg_billto_postal_postalcode=' + this.zip + '&pg_billto_postal_city=' + this.state + '&pg_billto_telecom_phone_number=' + this.phoneOne + '&pg_billto_online_email=' + this.email,
        desc: 'Setup Auto-Pay , Bank Drafts or pay directly with a check',
        icon: './assets/imgs/payment/echeck.png'
      },
      {
        title: 'Credit Card Payment',
        link: 'https://www.erentpayer.com/pay/createLogin.html?acceptTerms=1&pc=505',
        desc: 'Pay online securly with your Credit / Debit Card',
        icon: './assets/imgs/payment/credit1.png'
      },
      {
        title: 'VACA-LAY-AWAY',
        link: 'https://www.siebert-realty.com/htmls/layaway.php',
        desc: 'Eager to plan your perfect vacation but need some time to pay for it? Siebert Realty offers a vacation layaway plan! Take advantage of a dream vacation, while still managing your budget. ',
        icon: './assets/imgs/payment/vacay.png'
      }

    ];
    this.loading.dismiss();
  }
  getPayment(url) {
    console.log("paymentData", url);
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

}
