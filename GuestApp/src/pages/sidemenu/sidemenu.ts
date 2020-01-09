import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, Nav, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MainPage } from '../main/main';
import { WeatherPage } from "../weather/weather";
import { ProfilePage } from "../profile/profile";
import { SavelaterPage } from "../savelater/savelater";
import { ExplorehomePage } from "../explorehome/explorehome";
import { FaqPage } from "../faq/faq";
import { RestaurantsPage } from "../restaurants/restaurants";
import { RescatPage } from "../rescat/rescat";
import { AttractionsPage } from "../attractions/attractions";
import { PromotionsPage } from "../promotions/promotions";
import { UpcomeeventPage } from "../upcomeevent/upcomeevent";
import { ReservationPage } from "../reservation/reservation";
import { PaymentPage } from "../payment/payment";
import { RentalPage } from "../rental/rental";
import { BlogPage } from "../blog/blog";
import { SettingPage } from "../setting/setting";
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { LocalattractionPage } from "../localattraction/localattraction";

@IonicPage()
@Component({
  selector: 'page-sidemenu',
  templateUrl: 'sidemenu.html',
})
export class SidemenuPage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;

  pages: Array<{ image: string, bgFlag: boolean, title: string, component: any }>;
  photoUrl: any = ".assets/imgs/empty_avatar.png";
  firstname: any;
  lastname: any;
  current_userData: any;
  leaseData: any = {};
  guestData: any = {};
  loading: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public authService: AuthserviceProvider,
    public loadingCtrl: LoadingController

  ) {
    this.pages = [];
    console.log('sidebar construct');
    this.getLocalStorageData();
  }

  getLocalStorageData() {
    if (localStorage.getItem('user_id') !== null) {
      this.current_userData = localStorage.getItem("user_id")
    }
    if (localStorage.getItem('userType') == 'lease') {
      if (localStorage.getItem('leaseData') !== null) {
        this.leaseData = JSON.parse(localStorage.getItem('leaseData'));

        this.firstname = this.leaseData.profile.first_name;
        this.lastname = this.leaseData.profile.last_name;

      }
    } else if (localStorage.getItem('userType') == 'guest') {
      if (localStorage.getItem('guestData') !== null) {
        this.guestData = JSON.parse(localStorage.getItem('guestData'));
        this.firstname = this.guestData.GuestInfo.firstName;
        this.lastname = this.guestData.GuestInfo.lastName;
      }
    }
  }

    ionViewDidLoad() {
      console.log('ionViewDidLoad SidemenuPage');
      this.loading = this.loadingCtrl.create({
        content: "Loading...",
        spinner: "bubbles"
      });
      this.loading.present();
      this.viewPage();
      this.getCurrentUserData();
    }

    ionViewDidEnter() {
      console.log('ionViewDidEnter');
      if (!this.current_userData) {
        this.openPage(this.pages[3]);
      }
    }
    getCurrentUserData() {

      this.authService.getcurrentUserData(this.current_userData).subscribe(snapshot => {
        console.log("resData", snapshot.val());
        if (snapshot.val() !== null) {
          this.photoUrl = snapshot.val().photo;
          var userData = snapshot.val();
          // localStorage.setItem('current_user', JSON.stringify(userData));
          this.loading.dismiss();
        } else {
//          alert('There is no Data');
          this.photoUrl = ".assets/imgs/empty_avatar.png";
          this.loading.dismiss();
        }

      }, err => {
        console.log("error", err.message);
        this.loading.dismiss();
      })
    }

    viewPage() {
      if (this.current_userData) {
        console.log('here1');
        this.pages = [
          { image: 'assets/imgs/menu/nav16.png', bgFlag: true, title: 'Saved for later', component: SavelaterPage },
          { image: 'assets/imgs/menu/nav1.png', bgFlag: true, title: 'Home', component: HomePage },
          { image: 'assets/imgs/menu/nav11.png', bgFlag: true, title: 'Browse Rentals', component: RentalPage },
          { image: 'assets/imgs/menu/nav8.png', bgFlag: true, title: 'FAQ', component: FaqPage },
          { image: '', title: 'Local Guide', bgFlag: false, component: "no" },
          { image: 'assets/imgs/menu/nav12.png', bgFlag: true, title: 'Resturants', component: RescatPage },
          { image: 'assets/imgs/menu/nav9.png', bgFlag: true, title: 'Attractions', component: LocalattractionPage },
          { image: 'assets/imgs/menu/nav10.png', bgFlag: true, title: 'Siebert Coupons', component: PromotionsPage },
          { image: 'assets/imgs/menu/nav7.png', bgFlag: true, title: 'Upcoming Events', component: UpcomeeventPage },
          { image: 'assets/imgs/menu/nav4.png', bgFlag: true, title: 'Sandbridge Weather', component: WeatherPage },
          { image: '', title: 'Account Management', bgFlag: false, component: "no" },
          { image: 'assets/imgs/menu/nav15.png', bgFlag: true, title: 'My Reservations', component: ReservationPage },
          { image: 'assets/imgs/menu/nav6.png', bgFlag: true, title: 'Make a Payment', component: PaymentPage },
          { image: 'assets/imgs/menu/nav1.png', bgFlag: true, title: 'Explore my Home', component: ExplorehomePage },
          { image: 'assets/imgs/menu/nav13.png', bgFlag: true, title: 'View Our Blog', component: BlogPage },
          { image: 'assets/imgs/menu/nav5.png', bgFlag: true, title: 'Settings', component: SettingPage },
          { image: 'assets/imgs/menu/nav2.png', bgFlag: true, title: 'Profile', component: ProfilePage },
          { image: 'assets/imgs/menu/nav3.png', bgFlag: true, title: 'Log out', component: null }
        ]
      }
      else {
        console.log('here2');
        this.pages = [
          { image: 'assets/imgs/menu/nav33.png', bgFlag: true, title: 'Log In', component: MainPage },
          { image: '', title: '', bgFlag: false, component: "no" },
          { image: 'assets/imgs/menu/nav1.png', bgFlag: true, title: 'Home', component: HomePage },
          { image: 'assets/imgs/menu/nav11.png', bgFlag: true, title: 'Browse Rentals', component: RentalPage },
          { image: 'assets/imgs/menu/nav8.png', bgFlag: true, title: 'FAQ', component: FaqPage },
          { image: '', title: 'Local Guide', bgFlag: false, component: "no" },
          { image: 'assets/imgs/menu/nav12.png', bgFlag: true, title: 'Resturants', component: RescatPage },
          { image: 'assets/imgs/menu/nav9.png', bgFlag: true, title: 'Attractions', component: LocalattractionPage },
          { image: 'assets/imgs/menu/nav10.png', bgFlag: true, title: 'Siebert Coupons', component: PromotionsPage },
          { image: 'assets/imgs/menu/nav7.png', bgFlag: true, title: 'Upcoming Events', component: UpcomeeventPage },
          { image: 'assets/imgs/menu/nav4.png', bgFlag: true, title: 'Sandbridge Weather', component: WeatherPage },
        ]
  
      }
    }
    openPage(page) {
      if (page.component === null) {
        this.alertCtrl.create({
          title: "Confirm?",
          message: "Are you sure you want to logout?",
          buttons: [
            {
              text: "Cancel",
              role: 'cancel',
              handler: () => {
                return;
              }
            },
            {
              text: "Ok",
              handler: () => {
                this.authService.logout();
                console.log('localStorage', localStorage);
                localStorage.clear();
                let active = this.navCtrl.getActive(); // or getByIndex(int) if you know it
                this.navCtrl.push(HomePage);
                this.navCtrl.remove(active.index);
//                this.navCtrl.push(active.component);
                this.navCtrl.setRoot(SidemenuPage);
            }
            }
          ]
        }).present();
        return;
      } else if (page.component === "no") {
        return
      }
      if (page.component === HomePage) {
        this.nav.setRoot(HomePage);
      } else if (page.component === MainPage) {
        this.navCtrl.setRoot(MainPage);
      } else {
        this.nav.push(page.component);
      }
    }
  }
