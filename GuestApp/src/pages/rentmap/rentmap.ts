import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-rentmap',
  templateUrl: 'rentmap.html',
})
export class RentmapPage {
  map: any;
  lat: any = 43.07493;
  lng: any = -89.381388;
  my_location: any;
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController
  ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RentmapPage');
    this.loading = this.loadingCtrl.create({
      content: 'Loading...',
      spinner: "bubbles",
      cssClass: 'my-loading-class'
    });
    this.loading.present();
    this.viewMapData();
    // this.centerOnMe();
  }
  viewMapData() {
    this.loadMap(this.lat, this.lng);

  }
  loadMap(lat, lng) {
    let latLng = new google.maps.LatLng(lat, lng);
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: latLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      // zoomControl: false,
      streetViewControl: false,
    });
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });

    let content = "<p>This is html so you can put whatever <br>you want such as images and <a href=''>links</a> <br></p> <img style='border-radius: 24px;' src='http://lorempixel.com/50/50/food/?v=1'/><img style='border-radius: 24px;' src='http://lorempixel.com/50/50/food/?v=2'/> <img style='border-radius: 24px;' src='http://lorempixel.com/50/50/food/?v=3'/>"
    this.addInfoWindow(marker, content);

    this.loading.dismiss();
  }

  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }


  centerOnMe(){
   this.loading = this.loadingCtrl.create({
      content: "finding..."
    });
    this.loading.present();
    this.geolocation.getCurrentPosition().then((resp)=>{
      console.log("result_data", resp.coords.latitude, resp.coords.longitude);
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      this.loadMap(resp.coords.latitude, resp.coords.longitude);
      this.my_location = resp.coords.latitude + "," + resp.coords.longitude;
    }, err =>{
      console.log("Err", err);
    })
  }
}
