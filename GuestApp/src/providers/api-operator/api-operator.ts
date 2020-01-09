import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

@Injectable()
export class ApiOperatorProvider {
  // resurantUrl = "https://www.siebert-realty.com/htmls/api.php?endpoint=restuarants";
  // atractionUrl = "https://www.siebert-realty.com/htmls/api.php?endpoint=attractions";
  eventUrl = "https://www.siebert-realty.com/htmls/api.php?endpoint=events";
  feedCategortpath = "./assets/js/feeds-categories.json";
  reservation_path = "./assets/js/sample-guest.json";
  rentalSubDataIamgePath = "https://www.siebert-realty.com/htmls/unitsAPI.php?unit=";
  WORDPRESS_API_URL = "https://www.siebert-realty.com/blog/api/";
  leaseUrl = "https://guest.siebert-realty.com/confirmation.asp?p=1&lease=";
  userVerifyUrl = "https://api.siebert-realty.com/guest-app/verify.asp";  // post...
  shareApiUrl = "https://api.siebert-realty.com/guest-app/share.asp";
  // leaseInfoApi = "https://api.siebert-realty.com/guest-app/index2.asp?lease=";
  leaseInfoApi = "https://api.siebert-realty.com/guest-app/lease.asp?lease=";
  guestInfoApi = "https://api.siebert-realty.com/guest-app/index.asp?guest_id=";
  localattrationUrl = "https://api2.siebert-realty.com/explore/attractions";
  resCatUrl = "https://api2.siebert-realty.com/explore/restaurants";

  key: any;
  guestData: any = {};
  // userId: any;
  constructor(
    public http: HttpClient,
  ) {
    console.log('Hello ApiOperatorProvider Provider');
    // if (localStorage.getItem('user_id') !== null) {
    //   this.userId = localStorage.getItem("user_id")
    // };
  }

  //  get resturant data ..
  getResCatData() {
    return new Promise((resolve, reject) => {
      this.http.get(this.resCatUrl).subscribe(res => {
        resolve(res);
      }, err => {
        console.log("Reject_error", err);
        reject(err);
      });
    });
  }
  //  get  Local Attraction data ..

  getLocalAtrractionData() {
    return new Promise((resolve, reject) => {
      this.http.get(this.localattrationUrl).subscribe(res => {
        resolve(res);
      }, err => {
        console.log("Reject_error", err);
        reject(err);
      });
    });
  }


  //  get Event data ..

  getUpComingEventData() {
    return new Promise((resolve, reject) => {
      this.http.get(this.eventUrl).subscribe(res => {
        resolve(res);
      }, err => {
        console.log("Reject_error", err);
        reject(err);
      });
    });
  }

  //  get Current Weather data ..

  getCurrentWeatherData(lat, lng) {
    var current_weather_url = 'https://api.darksky.net/forecast/' + '6b7c2fec43cb9006f5d525f7934887bd' + '/' + lat + ',' + lng + '?units=us';
    console.log("current_weather_url", current_weather_url);
    return new Promise((resolve, reject) => {
      this.http.get(current_weather_url).subscribe(res => {
        resolve(res);
      }, err => {
        console.log("Reject_error", JSON.stringify(err));
        reject(err);
      });
    });
  }

  // get Rental Data....
  getBrowseRentalData() {
    return new Promise((resolve, reject) => {
      this.http.get(this.feedCategortpath).subscribe(res => {
        console.log("categoryData", res);
        resolve(res);
      }, err => {
        console.log("Reject_error", err);
        reject(err);
      });
    });
  }

  // get Reservation Data....
  getMyReservationData() {
    return new Promise((resolve, reject) => {
      this.http.get(this.reservation_path).subscribe(res => {
        console.log("categoryData", res);
        resolve(res);
      }, err => {
        console.log("Reject_error", err);
        reject(err);
      });
    });
  }


  //  get Rental SubData...
  getRentalDetailsData(id) {
    return new Promise((resolve, reject) => {
      this.http.get(this.rentalSubDataIamgePath + id).subscribe(res => {
        resolve(res);
      }, err => {
        console.log("Reject_error", err);
        reject(err);
      });
    });
  }

  //  get Rental SubData...
  getWordPressBlogData(page) {
    let blogUrl = this.WORDPRESS_API_URL + 'get_recent_posts/' + '?page=' + page;
    return new Promise((resolve, reject) => {
      this.http.get(blogUrl).subscribe(res => {
        resolve(res);
      }, err => {
        console.log("Reject_error", err);
        reject(err);
      });
    });
  }

  // get lease data...
  //  get Rental SubData...
  getLeaseData() {
    return new Promise((resolve, reject) => {
      resolve(this.leaseUrl);
    });
  }

  // firebase part...
  setGuestData(userId, inviteRes, shareInfo) {
    return Observable.create(observer => {
      var ref = firebase.database().ref('/guests/' + userId);
      var self = this;
      ref.orderByKey().limitToLast(1).once('value', snapshot => {
        if (snapshot.val() == null) {
          console.log("first_value")
          this.guestData.key = 0;
          self.saveUserEmailData(inviteRes, shareInfo, userId);
          observer.next();
        }
        else {
          snapshot.forEach(childSnapshot => {
            childSnapshot.key;
            self.key = childSnapshot.key;
            self.key++;
            this.guestData.key = self.key;
            self.saveUserEmailData(inviteRes, shareInfo, userId);
            console.log("key", self.key);
            observer.next();
          })
        }
      }).catch(err => {
        console.log("err", err.message)
      })
    })
  }
  saveUserEmailData(inviteRes, shareInfo, userId) {
    console.log("save_res", inviteRes, shareInfo, this.guestData.key);
    firebase.database().ref('/guests/' + userId + "/" + this.guestData.key).update({
      guest_phone: shareInfo.telephone,
      status: shareInfo.status,
      share_code: shareInfo.share_code,
      guest_name: inviteRes.guest,
      guset_trip: inviteRes.trip,
      signed: 0
    });
  }
  getGuestData(userId) {
    return firebase.database().ref('/guests/' + userId + "/").once('value');
  }

  getDeletedUserData(idx, userId) {
    return firebase.database().ref('/guests/' + userId + "/" + idx).remove();
  }

  getLeaseUserVerify(lease, unit, method) {

    let postData = new URLSearchParams();
    postData.set('lease', lease);
    postData.set('unit', unit);
    postData.set('method', method);
    console.log("postData", postData);
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.post(this.userVerifyUrl, postData.toString(), options)
  }

  getGuestUserVerify(telephone, shareCode, method) {
    let postData = new URLSearchParams();
    postData.set('telephone', telephone);
    postData.set('share_code', shareCode);
    postData.set('method', method);
    console.log("postData", postData);
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.post(this.userVerifyUrl, postData.toString(), options)
  }

  getInviteGuestData(phone, lease, guest_id) {
    console.log("invite_provide", phone, lease, guest_id);
    let postData = new URLSearchParams();
    postData.set('telephone', phone);
    postData.set('lease', lease);
    postData.set('guest_id', guest_id);
    console.log("postData", postData);
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.post(this.shareApiUrl, postData.toString(), options)
  }


  getLeaseUserIndexData(lease) {
    let guestAppUrl = this.leaseInfoApi + lease;
    return new Promise((resolve, reject) => {
      this.http.get(guestAppUrl).subscribe(res => {
        resolve(res);
      }, err => {
        console.log("Reject_error", err);
        reject(err);
      });
    });
  }

  getGuestUserIndexData(guestId) {
    let guestAppUrl = this.guestInfoApi + guestId;
    return new Promise((resolve, reject) => {
      this.http.get(guestAppUrl).subscribe(res => {
        resolve(res);
      }, err => {
        console.log("Reject_error", err);
        reject(err);
      });
    });
  }

}
