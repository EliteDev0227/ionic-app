import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-gettingmap',
  templateUrl: 'gettingmap.html',
})
export class GettingmapPage {
  map: any;
  lat: any;
  lng: any;
  my_location: any;
  loading: any;
  map_address: any;

  current_lat: any;
  current_lng: any;
  startLatLng: any;
  endLatLang: any;
  destination: any;
  des_lat: any;
  des_lng: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public geolocation: Geolocation,
    public nativeGeocoder: NativeGeocoder,
    public alertCtrl: AlertController,
    public launchNavigator: LaunchNavigator
    ) {
      this.destination = navParams.get('mapData');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmapPage');
    this.loading = this.loadingCtrl.create({
      content: '',
      spinner: 'bubbles'
    });
    this.loading.present();
    this.viewMap();
  }

  viewMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("viewMap", resp);
      this.current_lat = resp.coords.latitude;
      this.current_lng = resp.coords.longitude;
      localStorage.setItem('current_lat', this.current_lat);
      localStorage.setItem('current_lng', this.current_lng);
      if (localStorage.getItem('current_lat') !== null || localStorage.getItem('current_lng') !== null) {
        this.current_lat = localStorage.getItem('current_lat');
        this.current_lng = localStorage.getItem('current_lng');
        this.startLatLng = new google.maps.LatLng(this.current_lat, this.current_lng);
      } else {
        this.startLatLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      }
      let directionsDisplay;
      let directionsService = new google.maps.DirectionsService();
      directionsDisplay = new google.maps.DirectionsRenderer();

      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: this.startLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        // zoomControl: false,
        streetViewControl: false,
        // fullscreenControl: false,
      });
      let mapx = this.map;
      directionsDisplay.setMap(mapx);

      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      this.nativeGeocoder.forwardGeocode(this.destination, options).then((coordinates: NativeGeocoderForwardResult[]) => {
        console.log('The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude);
        this.des_lat = coordinates[0].latitude;
        this.des_lng = coordinates[0].longitude;
        this.endLatLang = new google.maps.LatLng(this.des_lat, this.des_lng);
        var bounds = new google.maps.LatLngBounds();
        bounds.extend(this.startLatLng);
        bounds.extend(this.endLatLang);

        mapx.fitBounds(bounds);
        var request = {
          origin: this.startLatLng,
          destination: this.endLatLang,
          travelMode: google.maps.TravelMode.DRIVING
        };
        var self = this;
        directionsService.route(request, function (response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
            console.log("resdata", response);
            directionsDisplay.setDirections(response);
            directionsDisplay.setMap(mapx);
          } else {
            alert("Directions request failed due to " + status);
          }
        });
      }).catch((error: any) => {
        this.alertCtrl.create({
          subTitle: "Error!",
          message: error.message,
          buttons: ["OK"]
        }).present();
      });
      this.loading.dismiss();
    }).catch(err => {
      this.alertCtrl.create({
        subTitle: "Error!",
        message: err.message,
        buttons: ["OK"]
      }).present();
      this.loading.dismiss();
    });
  }

  navigation() {
    let options: LaunchNavigatorOptions = {
      start: [this.current_lat, this.current_lng],
      app: this.launchNavigator.APP.GOOGLE_MAPS
    };
    this.launchNavigator.navigate(this.destination, options)
      .then(success => {
        console.log(success);
      }, error => {
        console.log(error);
      })
  }
}
