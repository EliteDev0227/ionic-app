import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ForgotpwdPage } from '../pages/forgotpwd/forgotpwd';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { SidemenuPage } from '../pages/sidemenu/sidemenu';
import { WorkordersPage } from '../pages/workorders/workorders';
import { MyalertPage } from '../pages/myalert/myalert';
import { ConnectPage } from '../pages/connect/connect';
import { SettingsPage } from '../pages/settings/settings';
import { ProfilePage } from '../pages/profile/profile';

import { IonicStorageModule } from '@ionic/storage';
// httpclient ...
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { FeedscategoryPage } from '../pages/feedscategory/feedscategory';
import { FeedscatdetailsPage } from '../pages/feedscatdetails/feedscatdetails';
import { FeedsentriesPage } from '../pages/feedsentries/feedsentries';
import { MomentModule } from "angular2-moment";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CallNumber } from '@ionic-native/call-number'
import { WorkorderdetailsPage } from '../pages/workorderdetails/workorderdetails';
import { WorkordernotesPage } from '../pages/workordernotes/workordernotes';
import { WorkorderattachPage } from '../pages/workorderattach/workorderattach';
import { MapsPage } from '../pages/maps/maps';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { EmailComposer } from '@ionic-native/email-composer';
import { SMS } from '@ionic-native/sms';
import { WorkorderTextPage } from '../pages/workorder-text/workorder-text';
import { WorkorderimagePage } from '../pages/workorderimage/workorderimage';
import { WorkorderinvoicePage } from '../pages/workorderinvoice/workorderinvoice';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Vibration } from '@ionic-native/vibration';
import { OneSignal } from '@ionic-native/onesignal';
import { PushnotificationProvider } from '../providers/pushnotification/pushnotification';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    SigninPage,
    SignupPage,
    ForgotpwdPage,
    SidemenuPage,
    WorkordersPage,
    MyalertPage,
    ConnectPage,
    SettingsPage,
    ProfilePage,
    FeedscategoryPage,
    FeedscatdetailsPage,
    FeedsentriesPage,
    WorkorderdetailsPage,
    WorkordernotesPage,
    WorkorderattachPage,
    MapsPage,
    WorkorderTextPage,
    WorkorderimagePage,
    WorkorderinvoicePage,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MomentModule,
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
    WorkordersPage,
    MyalertPage,
    ConnectPage,
    SettingsPage,
    ProfilePage,
    FeedscategoryPage,
    FeedscatdetailsPage,
    FeedsentriesPage,
    WorkorderdetailsPage,
    WorkordernotesPage,
    WorkorderattachPage,
    MapsPage,
    WorkorderTextPage,
    WorkorderimagePage,
    WorkorderinvoicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    InAppBrowser,
    CallNumber,
    Geolocation,
    NativeGeocoder,
    EmailComposer,
    SMS,
    Camera,
    SocialSharing,
    Vibration,
    OneSignal,
    PushnotificationProvider
  ]
})
export class AppModule {}
