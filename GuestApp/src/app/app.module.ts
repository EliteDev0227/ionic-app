import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { SigninPage } from "../pages/signin/signin";
import { SignupPage } from "../pages/signup/signup";
import { ForgotpwdPage } from "../pages/forgotpwd/forgotpwd";
import { SidemenuPage } from "../pages/sidemenu/sidemenu";
import { WeatherPage } from "../pages/weather/weather";
import { ProfilePage } from "../pages/profile/profile";
import { SavelaterPage } from "../pages/savelater/savelater";
import { ExplorehomePage } from "../pages/explorehome/explorehome";
import { FaqPage } from "../pages/faq/faq";
import { RestaurantsPage } from "../pages/restaurants/restaurants";
import { AttractionsPage } from "../pages/attractions/attractions";
import { PromotionsPage } from "../pages/promotions/promotions";
import { UpcomeeventPage } from "../pages/upcomeevent/upcomeevent";
import { ReservationPage } from "../pages/reservation/reservation";
import { PaymentPage } from "../pages/payment/payment";
import { RentalPage } from "../pages/rental/rental";
import { BlogPage } from "../pages/blog/blog";
import { SettingPage } from "../pages/setting/setting";
import { RentsubPage } from "../pages/rentsub/rentsub";
import { RentdetailsPage } from "../pages/rentdetails/rentdetails";
import { ReportPage } from "../pages/report/report";
import { InvitePage } from "../pages/invite/invite";
import { RentmapPage } from "../pages/rentmap/rentmap";
import { BlogpostPage } from "../pages/blogpost/blogpost";
import { WeathersubPage } from "../pages/weathersub/weathersub";
import { GettingmapPage } from "../pages/gettingmap/gettingmap";
import { SubmodalPage } from '../pages/submodal/submodal';
import { SubmapPage } from "../pages/submap/submap"
import { ArrivalmodalPage } from "../pages/arrivalmodal/arrivalmodal";
import { PhoneauthPage } from "../pages/phoneauth/phoneauth";
import { RentalmodalPage } from "../pages/rentalmodal/rentalmodal";
import { UpcomingmodalPage } from "../pages/upcomingmodal/upcomingmodal";
import { LocalattractionPage } from "../pages/localattraction/localattraction";
import { AttractionSubPage } from "../pages/attraction-sub/attraction-sub";
import { RescatPage } from "../pages/rescat/rescat";
import { InviteguestPage } from "../pages/inviteguest/inviteguest";
import { InviteothersPage } from "../pages/inviteothers/inviteothers";
import { PhoneinfoPage } from "../pages/phoneinfo/phoneinfo";
import { TripsPage } from "../pages/trips/trips";
import {PhoneloginPage} from "../pages/phonelogin/phonelogin";
import {SignupguestPage} from "../pages/signupguest/signupguest";
// httpclient ...
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import firebase from "firebase/app";
import { Firebase } from '@ionic-native/firebase';
//  api part
import { ApiOperatorProvider } from '../providers/api-operator/api-operator';
import { AuthserviceProvider } from '../providers/authservice/authservice';
import { NetworkProvider } from '../providers/network/network';
import { CountrycodeProvider } from '../providers/countrycode/countrycode';
import { OneSignal } from '@ionic-native/onesignal';
// pipe part..
import { PipesModule } from "../pipes/pipes.module";

// plugin...
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Geolocation } from '@ionic-native/geolocation';
import { EmailComposer } from '@ionic-native/email-composer';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { MomentModule } from "angular2-moment";
import { SocialSharing } from '@ionic-native/social-sharing';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { IonicStorageModule } from '@ionic/storage';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { Network } from '@ionic-native/network';
import { CallNumber } from '@ionic-native/call-number';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Sim } from '@ionic-native/sim';
import { SMS } from '@ionic-native/sms';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Base64 } from '@ionic-native/base64';
import { PushnotificationProvider } from '../providers/pushnotification/pushnotification';




// Initialize Firebase
var config = {
  apiKey: "AIzaSyB3KIlsJgJJqFc8pk9WH-uEzQ-9szzpHPI",
  authDomain: "siebert-guest-app.firebaseapp.com",
  databaseURL: "https://siebert-guest-app.firebaseio.com",
  projectId: "siebert-guest-app",
  storageBucket: "siebert-guest-app.appspot.com",
  messagingSenderId: "648371285185"
};
firebase.initializeApp(config);



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    SigninPage,
    SignupPage,
    ForgotpwdPage,
    SidemenuPage,
    WeatherPage,
    ProfilePage,
    SavelaterPage,
    FaqPage,
    RestaurantsPage,
    ExplorehomePage,
    AttractionsPage,
    PromotionsPage,
    UpcomeeventPage,
    ReservationPage,
    PaymentPage,
    RentalPage,
    BlogPage,
    SettingPage,
    RentsubPage,
    RentdetailsPage,
    ReportPage,
    InvitePage,
    WeathersubPage,
    RentmapPage,
    BlogpostPage,
    GettingmapPage,
    SubmodalPage,
    SubmapPage,
    ArrivalmodalPage,
    PhoneauthPage,
    RentalmodalPage,
    UpcomingmodalPage,
    LocalattractionPage,
    AttractionSubPage,
    RescatPage,
    InviteguestPage,
    InviteothersPage,
    PhoneinfoPage,
    TripsPage,
    PhoneloginPage,
    SignupguestPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MomentModule,
    PipesModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    SigninPage,
    SignupPage,
    ForgotpwdPage,
    SidemenuPage,
    WeatherPage,
    ProfilePage,
    SavelaterPage,
    FaqPage,
    RestaurantsPage,
    ExplorehomePage,
    AttractionsPage,
    PromotionsPage,
    UpcomeeventPage,
    ReservationPage,
    PaymentPage,
    RentalPage,
    BlogPage,
    SettingPage,
    RentsubPage,
    RentdetailsPage,
    ReportPage,
    InvitePage,
    WeathersubPage,
    RentmapPage,
    BlogpostPage,
    GettingmapPage,
    SubmodalPage,
    SubmapPage,
    ArrivalmodalPage,
    PhoneauthPage,
    RentalmodalPage,
    UpcomingmodalPage,
    LocalattractionPage,
    AttractionSubPage,
    RescatPage,
    InviteguestPage,
    InviteothersPage,
    PhoneinfoPage,
    TripsPage,
    PhoneloginPage,
    SignupguestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Camera,
    Sim,
    ApiOperatorProvider,
    InAppBrowser,
    Geolocation,
    EmailComposer,
    PhotoViewer,
    SocialSharing,
    AuthserviceProvider,
    NativeGeocoder,
    DocumentViewer,
    Network,
    CallNumber,
    NetworkProvider,
    LaunchNavigator,
    CountrycodeProvider,
    Firebase,
    SMS,
    FileTransfer,
    File,
    Base64,
    CountrycodeProvider,
    OneSignal,
    PushnotificationProvider
  ]
})
export class AppModule { }
